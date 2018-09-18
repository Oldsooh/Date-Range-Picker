import { Component, Input } from '@angular/core';
import { DateRangePopupComponent } from '@progress/kendo-angular-dateinputs';
import * as moment from 'moment';

/**
 * Specifies a date range control based on DateRangeComponent of KendoUI for Angular.
 * Provides some quickly chosices to specified date time range.
 * @example <date-range-picker startLabel='开始日期:' endLabel='结束日期' format='yyyy-MM-dd'></date-range-picker>
 */
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'date-range-picker',
  template: `
    <kendo-daterange>
    <label>
      <span class="label">{{ startLabel }}</span>
      <kendo-dateinput kendoDateRangeStartInput
      [(value)]="range.start"
      [format]="format"></kendo-dateinput>
    </label>
    <label>
      <span class="label">{{ endLabel }}</span>
      <kendo-dateinput kendoDateRangeEndInput
      [(value)]="range.end"
      [format]="format"
      ></kendo-dateinput>
    </label>
    <kendo-daterange-popup #popupDialog>
      <ng-template kendoDateRangePopupTemplate>
        <div class="timer-body">
          <div class="timer-body-top ">
            <div class="quick-selection">
              <h4>时间范围</h4>
              <button (click)='setDate("yesterday",  popupDialog)'
              class="{{currentSelectType =='yesterday' ? 'btn-active' : ''}}">昨日</button>
              <button (click)='setDate("today", popupDialog)' class="{{currentSelectType =='today' ? 'btn-active' : ''}}">今日</button>
              <button (click)='setDate("lastWeek", popupDialog)'
              class="{{currentSelectType =='lastWeek' ? 'btn-active' : ''}}">上周</button>
              <button (click)='setDate("thisWeek", popupDialog)'
              class="{{currentSelectType =='thisWeek' ? 'btn-active' : ''}}">本周</button>
              <button (click)='setDate("lastMonth", popupDialog)'
              class="{{currentSelectType =='lastMonth' ? 'btn-active' : ''}}">上月</button>
              <button (click)='setDate("thisMonth", popupDialog)'
                             class="{{currentSelectType =='thisMonth' ? 'btn-active' : ''}}">本月</button>
              <button (click)='setDate("lastYear", popupDialog)'
              class="{{currentSelectType =='lastYear' ? 'btn-active' : ''}}">去年</button>
              <button (click)='setDate("thisYear", popupDialog)'
              class="{{currentSelectType =='thisYear' ? 'btn-active' : ''}}">本年</button>
              <button (click)='setDate("lastSevenDays", popupDialog)'
              class="{{currentSelectType =='lastSevenDays' ? 'btn-active' : ''}}">过去7天</button>
              <button (click)='setDate("lastThirtyDays", popupDialog)'
               class="{{currentSelectType =='lastThirtyDays' ? 'btn-active' : ''}}">过去30天</button>
            </div>
            <div class="date-body">
              <kendo-multiviewcalendar kendoDateRangeSelection
              [(selectionRange)]="range"
              >
              </kendo-multiviewcalendar>
            </div>
          </div>
          <div class="timer-body-bottom clear-fix">
            <button (click)='confirm(popupDialog)'>确认</button>
            <button (click)='cancel(popupDialog)'>取消</button>
          </div>
        </div>
      </ng-template>
    </kendo-daterange-popup>
  </kendo-daterange>
    `,
  styles: [`.clear-fix {
        clear: both;
      }
      .timer-body {
        background: #FFFFFF;
        border: 1px solid #D6D9DF;
        box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.20);
      }

      .timer-body button {
        list-style: none;
        border: none;
        font-size: 1rem;
      }

      .timer-body .timer-body-top .quick-selection button:focus {
        background: #00A6C9;
        color: #fff;
      }

      .timer-body .timer-body-top .quick-selection button:hover {
        background: #00A6C9;
        color: #fff;
      }

      .quick-selection {
        width: 134px;
        padding: 14px;
        float: left;
      }

      .quick-selection button {
        width: 64px;
        height: 40px;
        background: #F5F6F8;
        margin-right: 6px;
        margin-bottom: 6px;
        /* color: #9397A2; */
        float: left;
      }

      .quick-selection button:nth-child(odd) {
        margin-right: 0px;
      }

      .quick-selection button:nth-child(10) {
        width: 134px;
        height: 30px;
        margin-right: 0px;
      }

      .quick-selection button:nth-child(11) {
        width: 134px;
        height: 30px;
        margin-right: 0px;
      }

      .quick-selection button:nth-child(12) {
        width: 134px;
        height: 30px;
        margin-bottom: 0px;
        margin-right: 0px;
      }

      .timer-body-top h4 {
        margin-top: 8px;
        line-height: 25px;
        text-align: center;
      }

      .active-style {
        background: #00A6C9;
        color: #fff;
      }

      .date-body {
        background: #FFFFFF;
        float: right;
      }

      .timer-body-bottom {
        background: #F5F6F8;
        border-top: 1px solid #D6D9DF;
        text-align: center;
      }

      .timer-body-bottom button {
        width: 64px;
        height: 32px;
        margin-top: 10px;
        margin-bottom: 10px;
        background: #00a6c9;
        color: #fff;
      }

      .timer-body-bottom button:last-child {
        background: #fff;
        width: 64px;
        height: 32px;
        border: 1px solid #E3E3E3;
        color: #575D6A;
      }

      .timer-body-bottom button:hover {
        background: #008fae;
        color: #fff;
      }

      .timer-body-bottom button:last-child:hover {
        color: #00a6c9;
        background-color: #fff;
        border-color: #00a6c9;
      }

      .timer-body-bottom button:first-child {
        margin-right: 6px;
      }

      .date-body .k-calendar .k-today>a {
        border: 0;
      }
      .btn-active {
        background: #00A6C9 !important;
        color: #fff !important;
      }
    `]
})

// tslint:disable-next-line:component-class-suffix
export class DateRangePicker {
  /**
   * The following input can be passed from attribute
   */
  @Input() startLabel = '开始日期';
  @Input() endLabel = '';
  @Input() format = 'yyyy-MM-dd';

  /**
   * Holds current selected date range
   */
  range = { start: null, end: null };

  /**
   * Holds current selected date range type
   */
  currentSelectType = null;

  /**
   * Holds the last selected date range
   */
  lastSelectedRange = { start: null, end: null };

  // The following objects hold specified date object
  todayTimeObj = { start: null, end: null };
  yesterdayTimeObj = { start: null, end: null };
  lastWeekTimeObj = { start: null, end: null };
  thisWeekTimeObj = { start: null, end: null };
  lastMonthTimeObj = { start: null, end: null };
  thisMonthTimeObj = { start: null, end: null };
  lastYearTimeObj = { start: null, end: null };
  thisYearTimeObj = { start: null, end: null };
  lastSevenDaysTimeObj = { start: null, end: null };
  lastThirthDaysTimeObj = { start: null, end: null };

  /**
   * Constructor
   */
  constructor() {
    this.initDate();
  }

  /**
   * Initializes specified date objects.
   */
  initDate() {
    const today = new Date();
    this.yesterdayTimeObj.start = moment(today).add(-1, 'days').startOf('day').toDate();
    this.yesterdayTimeObj.end = moment(today).add(-1, 'days').endOf('day').toDate();

    this.todayTimeObj.start = moment(today).startOf('day').toDate();
    this.todayTimeObj.end = moment(today).endOf('day').toDate();

    this.lastWeekTimeObj.start = moment(today).add(-1, 'weeks').startOf('week').toDate();
    this.lastWeekTimeObj.end = moment(today).add(-1, 'weeks').endOf('week').toDate();

    this.thisWeekTimeObj.start = moment(today).startOf('week').toDate();
    this.thisWeekTimeObj.end = moment(today).endOf('week').toDate();

    this.lastMonthTimeObj.start = moment(today).add(-1, 'months').startOf('month').toDate();
    this.lastMonthTimeObj.end = moment(today).add(-1, 'months').endOf('month').toDate();

    this.thisMonthTimeObj.start = moment(today).startOf('month').toDate();
    this.thisMonthTimeObj.end = moment(today).endOf('month').toDate();

    this.lastYearTimeObj.start = moment(today).add(-1, 'years').startOf('year').toDate();
    this.lastYearTimeObj.end = moment(today).add(-1, 'years').endOf('year').toDate();

    this.thisYearTimeObj.start = moment(today).startOf('year').toDate();
    this.thisYearTimeObj.end = moment(today).endOf('day').toDate();

    this.lastSevenDaysTimeObj.start = moment(today).add(-7, 'days').startOf('day').toDate();
    this.lastSevenDaysTimeObj.end = moment(today).add(-1, 'days').endOf('day').toDate();

    this.lastThirthDaysTimeObj.start = moment(today).add(-30, 'days').startOf('day').toDate();
    this.lastThirthDaysTimeObj.end = moment(today).add(-1, 'days').endOf('day').toDate();
  }

  /**
   * Raises an event when button confirm clicked.
   * @param dialog The date range pop up component instance.
   */
  confirm(dialog: DateRangePopupComponent) {
    this.closeDateRangePopup(dialog);

    // Clears hightlight if selected date range manually
    this.currentSelectType = null;
  }

  /**
   * Raises an event when button cancel clicked.
   * @param dialog The date range pop up component instance.
   */
  cancel(dialog: DateRangePopupComponent) {
    this._resetRange(this.lastSelectedRange.start, this.lastSelectedRange.end);
    this.closeDateRangePopup(dialog);
  }

  /**
   * Sets the corresponding date range value for selected date range type.
   * @param type The name of selected date range type.
   * @param dialog The date range pop up component instance.
   */
  setDate(type, dialog: DateRangePopupComponent) {
    let timeObj = null;

    switch (type) {
      case 'yesterday':
        timeObj = this.yesterdayTimeObj;
        break;
      case 'today':
        timeObj = this.todayTimeObj;
        break;
      case 'lastWeek':
        timeObj = this.lastWeekTimeObj;
        break;
      case 'thisWeek':
        timeObj = this.thisWeekTimeObj;
        break;
      case 'lastMonth':
        timeObj = this.lastMonthTimeObj;
        break;
      case 'thisMonth':
        timeObj = this.thisMonthTimeObj;
        break;
      case 'lastYear':
        timeObj = this.lastYearTimeObj;
        break;
      case 'thisYear':
        timeObj = this.thisYearTimeObj;
        break;
      case 'lastSevenDays':
        timeObj = this.lastSevenDaysTimeObj;
        break;
      case 'lastThirtyDays':
        timeObj = this.lastThirthDaysTimeObj;
        break;
      default:
        break;
    }

    if (timeObj) {
      this.currentSelectType = type;
      this._resetRange(timeObj.start, timeObj.end);
      this.closeDateRangePopup(dialog);
    }
  }

  /**
   * Hides the date range pop component
   * ands resets the lastSelectedRange with current range.
   */
  closeDateRangePopup(dialog: DateRangePopupComponent) {
    if (dialog) {
      dialog.toggle();
    }

    this.lastSelectedRange = this.range;
  }

  /**
   * Resets the date range value.
   * @param start The start date to be set.
   * @param end The end date to be set.
   */
  _resetRange(start = null, end = null) {
    this.lastSelectedRange = this.range;
    this.range = { start: start, end: end };
  }
}
