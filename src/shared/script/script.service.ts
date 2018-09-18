import { Injectable } from '@angular/core';
import { ScriptStore } from './script.store';

declare var document: any;

@Injectable()
export class ScriptService {

    private scripts: any = [];

    constructor() {
        ScriptStore.forEach((script: any) => {
            this.scripts[script.name] = {
                loaded: false,
                src: script.src
            };
        });
    }

    load(...scripts: any[]) {
        const promises: any[] = [];
        scripts.forEach((scriptInfo) => promises.push(this.loadScript(scriptInfo)));
        return Promise.all(promises);
    }

    loadScript(scriptInfo: any) {
        const name = scriptInfo.name;
        const src = scriptInfo.src;

        if (!name || !src) {
            return false;
        }

        let isAdded = false;
        this.scripts.forEach(ele => {
            if (ele && ele.name === name) {
                isAdded = true;
            }
        });

        if (!isAdded) {
            this.scripts[name] = {
                loaded: false,
                src: src
            };
            console.log('The ' + src + ' has been added.');

        }

        return new Promise((resolve, reject) => {
            // resolve if already loaded
            if (this.scripts[name].loaded) {
                resolve({ script: name, loaded: true, status: 'Already Loaded' });
            } else {
                // load script
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = this.scripts[name].src;
                if (script.readyState) {  // IE
                    script.onreadystatechange = () => {
                        if (script.readyState === 'loaded' || script.readyState === 'complete') {
                            script.onreadystatechange = null;
                            this.scripts[name].loaded = true;
                            resolve({ script: name, loaded: true, status: 'Loaded' });
                        }
                    };
                } else {  // Others

                    console.log('script:::', script);

                    script.onload = (e) => {
                        console.log('e:::', e);
                        console.log('name:::', name);
                        console.log('Scripts:::', this.scripts);



                        this.scripts[name].loaded = true;
                        resolve({ script: name, loaded: true, status: 'Loaded' });
                    };
                }
                script.onerror = (error: any) => resolve({ script: name, loaded: false, status: 'Loaded' });
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        });
    }

}
