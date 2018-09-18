import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-echarts-map',
  templateUrl: './echarts-map.component.html',
  styleUrls: ['./echarts-map.component.css'],
})
export class EchartsMapComponent implements OnInit {
  @ViewChild('maps') echart: ElementRef;

  public index = 1;
  public selectedProvince;
  public selectCity;

  public maps_instance: echarts.ECharts;
  public map_option: any;

  constructor() { }

  ngOnInit() {
    this.map_option = {
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


    // require('../../assets/mapjs/china.js');
    // require('../../assets/mapjs/青海/青海.js');
  }

  onMapsInit(event) {
    console.log('onMapsInit:::', event);

    this.maps_instance = event;
    // echarts.init(this.echart.nativeElement).setOption(this.map_option_province_level);

    this.maps_instance.on('mapselectchanged', function (e) {
      // this.onMapsSelctedChanged(e); // Not a function ???
      console.log('onMapsSelctedChanged:::', e);

      this.selectedProvince = e.batch[0].name;
      let provinceDataUrl = '../../assets/mapjs/' + this.selectedProvince + '/' + this.selectedProvince + '.js';
      provinceDataUrl = 'D:/Work/Workspace/Git Repository/DatePickerForAngular/src/assets/mapjs/青海/青海.js';

      console.log('selectedProvince:::', this.selectedProvince);
      console.log('provinceDataUrl:::', provinceDataUrl);

      // require(provinceDataUrl);

      const map_option_province_level = {
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
          mapType: this.selectedProvince,
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
      // this.maps_instance.setOption(this.map_option, true);
      // this.map_option = this.map_option_province_level;
      console.log('maps_instance:::', event);
      event.setOption(map_option_province_level, true);
      console.log('maps_instance:::', this.maps_instance);
    });

  }

  public onMapsSelctedChanged(event) {
    console.log('onMapsSelctedChanged:::', event);
  }
}
