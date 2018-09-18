import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ScriptService } from '../../shared/script/script.service';

@Component({
  selector: 'app-echarts-easy',
  templateUrl: './echarts-easy.component.html',
  styleUrls: ['./echarts-easy.component.css']
})

export class EchartsEasyComponent implements OnInit {
  @ViewChild('maps') mapsEle: ElementRef;
  maps_chart: any;
  maps_option: any;
  selected_province: any;
  selected_city: any;
  showBtnBack = false;

  constructor(private scriptService: ScriptService) {
  }

  ngOnInit() {
    this.initDefaultData();
    this.initMap();
  }

  initDefaultData() {
    this.maps_option = {
      legend: {
        data: ['安全状态']
      },
      grid: {
        bottom: 0
      },
      visualMap: {
        min: 0,
        max: 1000,
        top: 'middle',
        text: ['高', '低'], // 文本，默认为数值文本
        textStyle: {
          color: '#fff'
        }

      },
      series: [{
        tooltip: {
          trigger: 'item',
          formatter: '{b}'
        },
        name: '安全态势',
        type: 'map',
        mapType: 'china',
        x: 'center',
        y: 'center',
        roam: false,
        selectedMode: 'single',
        itemStyle: {
          normal: {
            label: {
              show: false
            }
          },
          emphasis: {
            label: {
              show: true
            }
          }
        },
        data: [{
          name: '北京',
          value: 100
        }, {
          name: '天津',
          value: 800
        }, {
          name: '上海',
          value: 600
        }, {
          name: '陕西',
          value: 100
        }, {
          name: '河北',
          value: 400
        }, {
          name: '河南',
          value: 500
        }, {
          name: '云南',
          value: 300
        }, {
          name: '辽宁',
          value: 100
        }, {
          name: '黑龙江',
          value: 900
        }, {
          name: '西藏',
          value: 1000
        }, {
          name: '安徽',
          value: 400
        },

        ]
      }],
      animation: false
    };
  }

  initMap() {
    console.log('MapsEle:::', this.mapsEle);
    this.maps_chart = echarts.init(this.mapsEle.nativeElement);

    this.refreshMap(this.maps_option);

    this.maps_chart.on('mapselectchanged', (e) => {
      console.log('mapselectchanged:::', e);

      let scriptSrc = '';

      const showProvince = !this.selected_province || this.selected_province === '';
      const showCity = this.selected_province && this.selected_province !== '' && (!this.selected_city || this.selected_city === '');

      console.log('showProvince:::', showProvince);
      console.log('showCity:::', showCity);

      if (showProvince) {
        // Province level
        this.selected_province = e.batch[0].name;
        scriptSrc = 'assets/LCIDI/mapjs/' + this.selected_province + '/' + this.selected_province + '.js';
      } else if (showCity) {
        // Load cities.
        this.selected_city = e.batch[0].name;
        scriptSrc = 'assets/LCIDI/mapjs/' + this.selected_province + '/city/' + this.selected_city + '.js';
      } else {
        return;
      }

      this.showBtnBack = true;

      console.log('selected_province:::', this.selected_province);
      console.log('selected_city:::', this.selected_city);


      const scriptInfo = { name: this.selected_province, src: scriptSrc };
      this.scriptService.load(scriptInfo).then(data => {
        console.log('script loaded ', data);
        this.setMapOptionWithProvinceData();
        this.refreshMap(this.maps_option);
      }).catch(error => console.log(error));

    });
  }

  setMapOptionWithProvinceData() {
    this.maps_option = {
      dataRange: {
        x: '-3000px',
        y: 'bottom',
        splitList: [{
          start: 41,
          color: 'rgba(182,132,220,0.8)'
        }, {
          start: 21,
          end: 40,
          color: 'rgba(255,108,96,0.8)'
        }, {
          start: 11,
          end: 20,
          color: 'rgba(252,179,34,0.8)'
        }, {
          start: 5,
          end: 10,
          color: 'rgba(89,172,226,0.8)'
        }, {
          start: 0,
          end: 4,
          label: '<4',
          color: 'rgba(120,205,81,0.8)'
        },

        ],
        //
        textStyle: {
          color: 'white',
        },
      },
      roam: false,
      series: [{
        tooltip: {
          trigger: 'item',
          formatter: '{b}'
        },
        type: 'map',
        mapType: this.selected_city || this.selected_province,
        x: 'center',
        y: 'center',
        // 							            roam: true,
        selectedMode: 'single',
        itemStyle: {
          normal: {
            label: {
              show: true
            }
          },
          emphasis: {
            label: {
              show: true
            }
          }
        },
        data: ''
      }],
      animation: false,

    };
  }

  refreshMap(maps_option: any) {
    if (this.maps_chart) {
      this.maps_chart.setOption(maps_option, true);
    }
  }

  onBtnBackClicked() {
    // If in city level, return province level, otherwise return top level
    // and clear selected province and city.
    if (this.selected_city && this.selected_city !== '') {
      this.selected_city = null;
      this.setMapOptionWithProvinceData();
    } else if (this.selected_province && this.selected_province !== '') {
      this.selected_province = null;
      this.showBtnBack = false;
      this.initDefaultData();
    } else {
      this.selected_province = null;
      this.selected_city = null;
    }

    this.refreshMap(this.maps_option);
  }
}

