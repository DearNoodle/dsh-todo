window.__ModuleLoader__.load({
  id: 'dsh-todo',
  factory(require) {
    const React = require('react');
    const h = React.createElement;

    const NS = 'dsh-todo';
    const STORAGE_KEY = 'dsh-todo:v3';
    const NOTES_KEY = 'dsh-todo:notes:v1';
    const LEGACY_V2 = 'dsh-todo:v2';
    const LEGACY_V1 = 'dsh-todo:v1';

    const EN = {
      defaultPageName: 'My tasks',
      pages: 'Pages',
      newPage: 'New page',
      pageName: 'Page name',
      viewTasks: 'Tasks',
      viewNotes: 'Notes',
      viewsLabel: 'Views',
      notes: 'Notes',
      newNote: 'New note',
      untitledNote: 'Untitled note',
      noteTitle: 'Note title',
      noteBodyPlaceholder: 'Start writing…',
      noteEmptyTitle: 'No notes yet',
      noteEmptyHint: 'Write a note, then drop or paste images right into it.',
      noteHint: 'Drop or paste images here',
      noteSaveError: 'Couldn’t save — browser storage is full. Try a smaller image.',
      deleteNote: 'Delete note',
      deleteNoteWarning: 'Delete “{name}”? This cannot be undone.',
      edited: 'Edited {date}',
      noteImageAlt: 'Attached image',
      deletePage: 'Delete page',
      keepOnePage: 'Keep at least one page',
      deletePageWarning: 'Delete “{name}”? {n} tasks on this page will be deleted.',
      deletePageWarningNoTasks: 'Delete “{name}”?',
      pageStats: '{open} unfinished · {done} done',
      pageStatsDone: '{done} done',
      pageStatsEmpty: 'No tasks yet',
      progressLabel: 'Progress',
      placeholder: 'Add a task…',
      add: 'Add',
      filterAll: 'All',
      filterActive: 'Unfinished',
      filterDone: 'Done',
      filtersLabel: 'Filters',
      resetFilters: 'Reset',
      dueFilterLabel: 'Filter by due date',
      dueAny: 'Any date',
      dueToday: 'Today',
      dueTomorrow: 'Tomorrow',
      dueWeek: 'Next 7 days',
      dueOverdue: 'Overdue',
      dueNone: 'No date',
      clearCompleted: 'Clear completed',
      groupsInbox: 'Inbox',
      newGroup: 'New group',
      groupName: 'Group name',
      createGroup: 'Add',
      deleteGroup: 'Delete group',
      deleteGroupWarning: 'Delete “{name}”? {n} tasks will move to Inbox.',
      deleteGroupWarningNoTasks: 'Delete “{name}”?',
      noTasks: 'No tasks yet',
      noMatching: 'No matching tasks',
      emptyTitle: 'This page is empty',
      emptyHint: 'Add your first task above, or create a group for it.',
      editTask: 'Edit task',
      close: 'Close',
      titleLabel: 'Title',
      detailsLabel: 'Details',
      detailsPlaceholder: 'Notes, links, anything worth keeping…',
      dueDateLabel: 'Due date',
      groupLabel: 'Group',
      save: 'Save',
      cancel: 'Cancel',
      deleteTask: 'Delete task',
      hasDetails: 'Has details',
      clearDate: 'Clear date',
      setDate: 'Add date',
      prevMonth: 'Previous month',
      nextMonth: 'Next month',
      openTask: 'Open task details',
      markDone: 'Mark as done',
      markActive: 'Mark as unfinished',
    };

    const ZH = {
      defaultPageName: '我的任務',
      pages: '頁面',
      newPage: '新增頁面',
      pageName: '頁面名稱',
      viewTasks: '任務',
      viewNotes: '筆記',
      viewsLabel: '檢視',
      notes: '筆記',
      newNote: '新增筆記',
      untitledNote: '未命名筆記',
      noteTitle: '筆記標題',
      noteBodyPlaceholder: '開始書寫…',
      noteEmptyTitle: '還沒有筆記',
      noteEmptyHint: '寫一則筆記，然後把圖片拖曳或貼進來。',
      noteHint: '可拖曳或貼上圖片',
      noteSaveError: '無法儲存——瀏覽器儲存空間已滿，請試試較小的圖片。',
      deleteNote: '刪除筆記',
      deleteNoteWarning: '刪除「{name}」？此動作無法復原。',
      edited: '編輯於 {date}',
      noteImageAlt: '附加圖片',
      deletePage: '刪除頁面',
      keepOnePage: '至少保留一個頁面',
      deletePageWarning: '刪除「{name}」？此頁面的 {n} 項任務也會一起刪除。',
      deletePageWarningNoTasks: '刪除「{name}」？',
      pageStats: '{open} 項未完成 · {done} 項已完成',
      pageStatsDone: '{done} 項已完成',
      pageStatsEmpty: '尚無任務',
      progressLabel: '完成進度',
      placeholder: '新增一件事…',
      add: '新增',
      filterAll: '全部',
      filterActive: '未完成',
      filterDone: '已完成',
      filtersLabel: '篩選',
      resetFilters: '重設',
      dueFilterLabel: '依到期日篩選',
      dueAny: '任何日期',
      dueToday: '今天',
      dueTomorrow: '明天',
      dueWeek: '未來 7 天',
      dueOverdue: '已逾期',
      dueNone: '無日期',
      clearCompleted: '清除已完成',
      groupsInbox: '未分組',
      newGroup: '新增群組',
      groupName: '群組名稱',
      createGroup: '新增',
      deleteGroup: '刪除群組',
      deleteGroupWarning: '刪除「{name}」？{n} 項任務會移到未分組。',
      deleteGroupWarningNoTasks: '刪除「{name}」？',
      noTasks: '尚無任務',
      noMatching: '沒有符合篩選的任務',
      emptyTitle: '這個頁面還沒有任務',
      emptyHint: '從上面新增第一件事，或先建立一個群組。',
      editTask: '編輯任務',
      close: '關閉',
      titleLabel: '標題',
      detailsLabel: '詳細內容',
      detailsPlaceholder: '備註、連結，或任何值得留下的細節…',
      dueDateLabel: '到期日',
      groupLabel: '群組',
      save: '儲存',
      cancel: '取消',
      deleteTask: '刪除任務',
      hasDetails: '有詳細內容',
      clearDate: '清除日期',
      setDate: '設定日期',
      prevMonth: '上個月',
      nextMonth: '下個月',
      openTask: '開啟任務詳細內容',
      markDone: '標記為完成',
      markActive: '標記為未完成',
    };

    const CSS = `
.dsh-todo-page {
  --dsh-todo-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  --dsh-todo-ink: var(--dsw-alias-label-primary);
  --dsh-todo-ink-2: var(--dsw-alias-label-secondary);
  --dsh-todo-ink-3: var(--dsw-alias-label-tertiary, var(--dsw-alias-label-secondary));
  --dsh-todo-line: color-mix(in srgb, var(--dsh-todo-ink) 11%, transparent);
  --dsh-todo-line-2: color-mix(in srgb, var(--dsh-todo-ink) 18%, transparent);
  /* Opaque surfaces are mixed from our own canvas, not from the theme's translucent
     overlay tokens: on some themes the overlay resolves to a flat grey, which turns
     dialogs, menus, and fields into light grey slabs. */
  --dsh-todo-canvas: #fdfbf7;
  --dsh-todo-sheet: color-mix(in srgb, var(--dsh-todo-ink) 2%, var(--dsh-todo-canvas));
  --dsh-todo-accent: var(--dsh-todo-ink);
  --dsh-todo-accent-ink: var(--dsh-todo-canvas);
  --dsh-todo-tint: color-mix(in srgb, var(--dsh-todo-ink) 8%, transparent);
  --dsh-todo-tint-soft: color-mix(in srgb, var(--dsh-todo-ink) 4.5%, transparent);
  --dsh-todo-field: color-mix(in srgb, var(--dsh-todo-ink) 4%, var(--dsh-todo-canvas));
  --dsh-todo-raised: color-mix(in srgb, var(--dsh-todo-ink) 7%, var(--dsh-todo-canvas));
  --dsh-todo-surface: var(--dsh-todo-raised);
  --dsh-todo-overlay: var(--dsh-todo-sheet);
  --dsh-todo-danger: var(--dsw-alias-state-error-primary, #cf4a4a);
  --dsh-todo-shadow: 0 16px 40px rgb(38 30 18 / 12%), 0 1px 3px rgb(38 30 18 / 9%);
  height: 100%;
  overflow-y: auto;
  container-type: inline-size;
  color-scheme: light;
  background: var(--dsw-alias-bg-base);
  color: var(--dsh-todo-ink);
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
}
.dsh-todo-page[data-dark="true"] {
  color-scheme: dark;
  --dsh-todo-canvas: #0d1014;
  --dsh-todo-shadow: 0 26px 72px rgb(0 0 0 / 58%), 0 2px 10px rgb(0 0 0 / 38%);
}
.dsh-todo-page * { box-sizing: border-box; }
.dsh-todo-shell {
  max-width: 1080px;
  margin: 0 auto;
  padding: 38px 32px 140px;
}

/* masthead */
.dsh-todo-masthead {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 34px;
}
.dsh-todo-wordmark {
  font-family: var(--dsh-todo-mono);
  font-size: 10px;
  line-height: 1;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--dsh-todo-ink-2);
}
.dsh-todo-masthead-right {
  display: flex;
  align-items: center;
  gap: 24px;
}
.dsh-todo-date {
  font-family: var(--dsh-todo-mono);
  font-size: 10.5px;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.04em;
  color: var(--dsh-todo-ink-3);
}
.dsh-todo-viewtabs {
  display: inline-flex;
  align-items: center;
  gap: 20px;
}
.dsh-todo-viewtabs button {
  position: relative;
  padding: 0 0 7px;
  border: 0;
  background: none;
  color: var(--dsh-todo-ink-2);
  font: inherit;
  font-size: 12.5px;
  cursor: pointer;
  transition: color 120ms ease;
}
.dsh-todo-viewtabs button:hover { color: var(--dsh-todo-ink); }
.dsh-todo-viewtabs button[aria-selected="true"] {
  color: var(--dsh-todo-ink);
  font-weight: 500;
}
.dsh-todo-viewtabs button[aria-selected="true"]::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1.5px;
  border-radius: 2px;
  background: var(--dsh-todo-accent);
}

/* two planes: index rail + content */
.dsh-todo-workspace {
  display: grid;
  grid-template-columns: minmax(0, 192px) minmax(0, 1fr);
  gap: 56px;
  align-items: start;
}
.dsh-todo-rail {
  position: sticky;
  top: 34px;
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-height: 180px;
}
.dsh-todo-rail-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 9px;
  padding: 0 8px;
}
.dsh-todo-rail-label {
  font-family: var(--dsh-todo-mono);
  font-size: 9.5px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--dsh-todo-ink-3);
}
.dsh-todo-rail-add {
  display: grid;
  place-items: center;
  width: 22px;
  height: 22px;
  margin-right: -4px;
  padding: 0;
  border: 0;
  border-radius: 5px;
  background: transparent;
  color: var(--dsh-todo-ink-3);
  cursor: pointer;
  transition: background 120ms ease, color 120ms ease;
}
.dsh-todo-rail-add:hover {
  background: var(--dsh-todo-tint-soft);
  color: var(--dsh-todo-ink);
}
.dsh-todo-pagerail-item {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 7px 8px;
  border: 0;
  border-radius: 7px;
  background: transparent;
  color: var(--dsh-todo-ink-2);
  font: inherit;
  text-align: left;
  cursor: pointer;
  transition: background 120ms ease, color 120ms ease;
}
.dsh-todo-pagerail-item:hover {
  background: var(--dsh-todo-tint-soft);
  color: var(--dsh-todo-ink);
}
.dsh-todo-pagerail-item[data-active="true"] {
  background: var(--dsh-todo-tint);
  color: var(--dsh-todo-ink);
}
.dsh-todo-pagerail-top {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-width: 0;
}
.dsh-todo-pagerail-name {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 13px;
  letter-spacing: -0.005em;
}
.dsh-todo-pagerail-item[data-active="true"] .dsh-todo-pagerail-name { font-weight: 600; }
.dsh-todo-pagerail-count {
  flex: none;
  font-family: var(--dsh-todo-mono);
  font-size: 10px;
  font-variant-numeric: tabular-nums;
  color: var(--dsh-todo-ink-2);
}
.dsh-todo-pagerail-date {
  flex: none;
  font-family: var(--dsh-todo-mono);
  font-size: 9.5px;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.02em;
  color: var(--dsh-todo-ink-3);
}
.dsh-todo-pageform {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 8px;
  padding: 8px;
  border-radius: 8px;
  background: var(--dsh-todo-tint-soft);
}
.dsh-todo-pageform input {
  width: 100%;
  height: 30px;
  padding: 0 8px;
  border: 1px solid var(--dsh-todo-line-2);
  border-radius: 6px;
  background: var(--dsh-todo-field);
  color: var(--dsh-todo-ink);
  font: inherit;
  font-size: 12.5px;
  outline: none;
}
.dsh-todo-pageform input:focus { border-color: var(--dsh-todo-accent); }
.dsh-todo-form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 4px;
}
.dsh-todo-mini {
  height: 26px;
  padding: 0 9px;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--dsh-todo-ink-2);
  font: inherit;
  font-size: 11.5px;
  cursor: pointer;
  transition: background 120ms ease, color 120ms ease;
}
.dsh-todo-mini:hover {
  background: var(--dsh-todo-tint-soft);
  color: var(--dsh-todo-ink);
}
.dsh-todo-mini:disabled {
  color: var(--dsh-todo-ink-3);
  background: transparent;
  opacity: 0.55;
  cursor: default;
}
.dsh-todo-mini-primary {
  background: var(--dsh-todo-accent);
  color: var(--dsh-todo-accent-ink);
  font-weight: 600;
}
.dsh-todo-mini-primary:not(:disabled):hover {
  background: var(--dsh-todo-accent);
  color: var(--dsh-todo-accent-ink);
  opacity: 0.9;
}
.dsh-todo-mini-primary:disabled {
  background: var(--dsh-todo-tint);
  color: var(--dsh-todo-ink-3);
  opacity: 1;
}

/* page header */
.dsh-todo-content { min-width: 0; }
.dsh-todo-pagehead {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px 24px;
}
.dsh-todo-pagehead-main {
  flex: 1 1 280px;
  min-width: 0;
}
.dsh-todo-titleinput {
  width: 100%;
  margin: 0 0 0 -10px;
  padding: 6px 10px;
  border: 1px solid transparent;
  border-radius: 10px;
  background: transparent;
  color: var(--dsh-todo-ink);
  font: inherit;
  font-size: clamp(22px, 2.6vw, 28px);
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.022em;
  outline: none;
  transition: border-color 140ms ease, box-shadow 140ms ease;
}
.dsh-todo-titleinput::placeholder { color: var(--dsh-todo-ink-3); }
.dsh-todo-titleinput:hover { border-color: var(--dsh-todo-line); }
.dsh-todo-titleinput:focus {
  border-color: var(--dsh-todo-accent);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--dsh-todo-accent) 14%, transparent);
}
.dsh-todo-pagestats {
  margin: 8px 0 0 1px;
  font-family: var(--dsh-todo-mono);
  font-size: 10.5px;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.05em;
  color: var(--dsh-todo-ink-2);
}
.dsh-todo-pagehead-tools {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;
  padding-top: 3px;
}
.dsh-todo-seg {
  display: inline-flex;
  gap: 2px;
  padding: 2px;
  border-radius: 8px;
  background: var(--dsh-todo-field);
}
.dsh-todo-seg button {
  padding: 5px 10px;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--dsh-todo-ink-3);
  font: inherit;
  font-size: 11.5px;
  cursor: pointer;
  transition: background 120ms ease, color 120ms ease;
}
.dsh-todo-seg button:hover { color: var(--dsh-todo-ink); }
.dsh-todo-seg button[aria-pressed="true"] {
  background: var(--dsh-todo-tint);
  color: var(--dsh-todo-ink);
  font-weight: 500;
}
.dsh-todo-select { position: relative; display: inline-flex; min-width: 0; }
.dsh-todo-select-trigger { cursor: pointer; }
.dsh-todo-select-value {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.dsh-todo-select-caret {
  flex: none;
  margin-left: 2px;
  opacity: 0.5;
}
.dsh-todo-select-menu {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  z-index: 40;
  min-width: max(100%, 168px);
  max-height: 264px;
  overflow: auto;
  padding: 5px;
  border: 1px solid var(--dsh-todo-line-2);
  border-radius: 10px;
  background: var(--dsh-todo-raised);
  box-shadow: var(--dsh-todo-shadow);
}
.dsh-todo-select-menu.is-up { top: auto; bottom: calc(100% + 6px); }
.dsh-todo-select-option {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 7px 9px;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--dsh-todo-ink-2);
  font: inherit;
  font-size: 12.5px;
  text-align: left;
  white-space: nowrap;
  cursor: pointer;
  transition: background 120ms ease, color 120ms ease;
}
.dsh-todo-select-option:hover {
  background: var(--dsh-todo-tint-soft);
  color: var(--dsh-todo-ink);
}
.dsh-todo-select-option[aria-selected="true"] {
  background: var(--dsh-todo-tint);
  color: var(--dsh-todo-ink);
  font-weight: 500;
}
.dsh-todo-select-option-label {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
}
.dsh-todo-select-check {
  flex: none;
  margin-left: auto;
  opacity: 0;
}
.dsh-todo-select-option[aria-selected="true"] .dsh-todo-select-check { opacity: 1; }
.dsh-todo-duecontrol {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
  height: 30px;
  padding: 0 9px;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: var(--dsh-todo-ink-2);
  font: inherit;
  font-size: 11.5px;
  transition: background 120ms ease, color 120ms ease;
}
.dsh-todo-duecontrol:hover {
  background: var(--dsh-todo-tint-soft);
  color: var(--dsh-todo-ink);
}
.dsh-todo-duecontrol[data-active="true"] { background: var(--dsh-todo-tint); }
.dsh-todo-duecontrol .dsh-todo-select-value {
  max-width: 120px;
  color: var(--dsh-todo-ink-2);
}
.dsh-todo-duecontrol[data-active="true"] .dsh-todo-select-value {
  color: var(--dsh-todo-ink);
  font-weight: 500;
}
.dsh-todo-field .dsh-todo-select { display: flex; width: 100%; }
.dsh-todo-field-select {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  text-align: left;
}
.dsh-todo-field-select .dsh-todo-select-value { flex: 1; text-align: left; }
.dsh-todo-reset {
  padding: 5px 6px;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--dsh-todo-ink-2);
  font: inherit;
  font-size: 11.5px;
  cursor: pointer;
  transition: background 120ms ease, color 120ms ease;
}
.dsh-todo-reset:hover {
  background: var(--dsh-todo-tint-soft);
  color: var(--dsh-todo-ink);
}
.dsh-todo-page-delete {
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  padding: 0;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: var(--dsh-todo-ink-3);
  cursor: pointer;
  transition: background 120ms ease, color 120ms ease;
}
.dsh-todo-page-delete:hover {
  background: var(--dsh-todo-tint-soft);
  color: var(--dsh-todo-danger);
}
.dsh-todo-page-delete:disabled {
  color: var(--dsh-todo-ink-3);
  background: transparent;
  opacity: 0.4;
  cursor: default;
}

/* completion line */
.dsh-todo-progress {
  height: 2px;
  margin: 20px 0 26px;
  border-radius: 99px;
  background: var(--dsh-todo-line);
  overflow: hidden;
}
.dsh-todo-progress span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: var(--dsh-todo-accent);
  transition: width 200ms ease;
}

/* composer: a line, not a box */
.dsh-todo-composer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  margin: 0 0 34px;
  padding-bottom: 6px;
  border-bottom: 1px solid var(--dsh-todo-line-2);
  transition: border-color 160ms ease;
}
.dsh-todo-composer:focus-within { border-bottom-color: var(--dsh-todo-accent); }
.dsh-todo-composer-text {
  flex: 1 1 240px;
  min-width: 0;
  height: 44px;
  padding: 0 6px;
  border: 0;
  background: transparent;
  color: var(--dsh-todo-ink);
  font: inherit;
  font-size: 14.5px;
  outline: none;
}
.dsh-todo-composer-text::placeholder { color: var(--dsh-todo-ink-3); }
.dsh-todo-composer-field {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  height: 30px;
  padding: 0 8px;
  border: 0;
  border-radius: 7px;
  background: transparent;
  color: var(--dsh-todo-ink-2);
  transition: background 120ms ease, color 120ms ease;
}
.dsh-todo-composer-field:hover {
  background: var(--dsh-todo-tint-soft);
  color: var(--dsh-todo-ink-2);
}
.dsh-todo-composer-field input {
  max-width: 112px;
  height: 100%;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--dsh-todo-ink-2);
  font: inherit;
  font-size: 11.5px;
  outline: none;
}
.dsh-todo-composer-field input[type="date"] { max-width: 122px; }
.dsh-todo-composer-field input[type="date"]::-webkit-calendar-picker-indicator {
  opacity: 0.45;
  cursor: pointer;
}
.dsh-todo-composer-field input[type="date"]::-webkit-calendar-picker-indicator:hover { opacity: 0.8; }
.dsh-todo-composer-field .dsh-todo-select { height: 100%; max-width: 116px; }
.dsh-todo-bare-select {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
  height: 100%;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--dsh-todo-ink-2);
  font: inherit;
  font-size: 11.5px;
}
.dsh-todo-bare-select .dsh-todo-select-value { max-width: 110px; }
.dsh-todo-composer-add {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  height: 30px;
  padding: 0 11px;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: var(--dsh-todo-ink);
  font: inherit;
  font-size: 11.5px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 120ms ease, background 120ms ease, color 120ms ease;
}
.dsh-todo-composer-add:not(:disabled):hover { background: var(--dsh-todo-tint); }
.dsh-todo-composer-add:disabled {
  background: transparent;
  color: var(--dsh-todo-ink-3);
  opacity: 0.55;
  cursor: default;
}

/* sections + rows */
.dsh-todo-groups { display: flex; flex-direction: column; }
.dsh-todo-group + .dsh-todo-group {
  margin-top: 22px;
  padding-top: 20px;
  border-top: 1px solid var(--dsh-todo-line);
}
.dsh-todo-group-head {
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 26px;
  margin-bottom: 4px;
}
.dsh-todo-group-name {
  flex: 1;
  min-width: 0;
  margin-left: -6px;
  padding: 2px 6px;
  border: 1px solid transparent;
  border-radius: 6px;
  background: transparent;
  color: var(--dsh-todo-ink-2);
  font: inherit;
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: 0.01em;
  outline: none;
  transition: border-color 140ms ease, box-shadow 140ms ease;
}
.dsh-todo-group-name::placeholder { color: var(--dsh-todo-ink-3); }
.dsh-todo-group-name:hover { border-color: var(--dsh-todo-line); }
.dsh-todo-group-name:focus {
  border-color: var(--dsh-todo-accent);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--dsh-todo-accent) 12%, transparent);
}
.dsh-todo-group-label {
  flex: 1;
  min-width: 0;
  margin: 0 0 0 -6px;
  padding: 2px 6px;
  color: var(--dsh-todo-ink-2);
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: 0.01em;
}
.dsh-todo-group-count {
  flex: none;
  font-family: var(--dsh-todo-mono);
  font-size: 10px;
  font-variant-numeric: tabular-nums;
  color: var(--dsh-todo-ink-2);
}
.dsh-todo-group-actions {
  display: flex;
  gap: 2px;
  opacity: 0;
  transition: opacity 120ms ease;
}
.dsh-todo-group:hover .dsh-todo-group-actions,
.dsh-todo-group:focus-within .dsh-todo-group-actions { opacity: 1; }
.dsh-todo-iconbtn {
  display: grid;
  place-items: center;
  width: 26px;
  height: 26px;
  padding: 0;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--dsh-todo-ink-3);
  cursor: pointer;
  transition: background 120ms ease, color 120ms ease;
}
.dsh-todo-iconbtn:hover {
  background: var(--dsh-todo-tint-soft);
  color: var(--dsh-todo-ink);
}
.dsh-todo-group-actions .dsh-todo-iconbtn:hover { color: var(--dsh-todo-danger); }
.dsh-todo-list {
  display: flex;
  flex-direction: column;
  gap: 1px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.dsh-todo-row {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin: 0 -8px;
  padding: 7px 8px;
  border-radius: 8px;
  transition: background 120ms ease;
}
.dsh-todo-row:hover { background: var(--dsh-todo-tint-soft); }
.dsh-todo-checkwrap {
  position: relative;
  flex: none;
  display: grid;
  place-items: center;
  width: 18px;
  height: 18px;
  margin-top: 2px;
}
.dsh-todo-check {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  opacity: 0;
  cursor: pointer;
}
.dsh-todo-cbox {
  display: grid;
  place-items: center;
  width: 18px;
  height: 18px;
  border: 1.5px solid var(--dsh-todo-line-2);
  border-radius: 6px;
  background: transparent;
  color: transparent;
  pointer-events: none;
  transition: border-color 120ms ease, background 120ms ease, color 120ms ease;
}
.dsh-todo-checkwrap:hover .dsh-todo-cbox { border-color: var(--dsh-todo-accent); }
.dsh-todo-check:checked + .dsh-todo-cbox {
  border-color: var(--dsh-todo-accent);
  background: var(--dsh-todo-accent);
  color: var(--dsh-todo-accent-ink);
}
.dsh-todo-check:focus-visible + .dsh-todo-cbox {
  outline: 2px solid var(--dsh-todo-accent);
  outline-offset: 2px;
}
.dsh-todo-text {
  flex: 1;
  min-width: 0;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--dsh-todo-ink);
  font: inherit;
  font-size: 14px;
  line-height: 1.5;
  text-align: left;
  overflow-wrap: anywhere;
  cursor: pointer;
}
.dsh-todo-row[data-done="true"] .dsh-todo-text {
  color: var(--dsh-todo-ink-3);
  text-decoration: line-through;
  text-decoration-thickness: 1px;
}
.dsh-todo-note {
  flex: none;
  display: grid;
  place-items: center;
  width: 16px;
  height: 20px;
  color: var(--dsh-todo-ink-3);
}
.dsh-todo-due {
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  min-width: 78px;
  padding: 2px 0;
  color: var(--dsh-todo-ink-2);
  font-family: var(--dsh-todo-mono);
  font-size: 10px;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.dsh-todo-due[data-state="overdue"] { color: var(--dsh-todo-danger); }
.dsh-todo-due[data-state="today"] {
  color: var(--dsh-todo-accent);
  font-weight: 600;
}
.dsh-todo-row[data-done="true"] .dsh-todo-due { color: var(--dsh-todo-ink-3); }
.dsh-todo-delete {
  flex: none;
  display: grid;
  place-items: center;
  width: 24px;
  height: 24px;
  padding: 0;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--dsh-todo-ink-3);
  cursor: pointer;
  opacity: 0;
  transition: opacity 120ms ease, background 120ms ease, color 120ms ease;
}
.dsh-todo-row:hover .dsh-todo-delete,
.dsh-todo-delete:focus-visible { opacity: 1; }
.dsh-todo-delete:hover {
  background: var(--dsh-todo-tint-soft);
  color: var(--dsh-todo-danger);
}
.dsh-todo-group-empty {
  padding: 6px 8px 8px;
  color: var(--dsh-todo-ink-3);
  font-size: 12.5px;
}

/* list footer */
.dsh-todo-listfoot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 26px;
  padding-top: 16px;
  border-top: 1px solid var(--dsh-todo-line);
}
.dsh-todo-newgroup {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-left: -6px;
  padding: 5px 6px;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--dsh-todo-ink-2);
  font: inherit;
  font-size: 12px;
  cursor: pointer;
  transition: background 120ms ease, color 120ms ease;
}
.dsh-todo-newgroup:hover {
  background: var(--dsh-todo-tint-soft);
  color: var(--dsh-todo-ink);
}
.dsh-todo-clear {
  padding: 5px 6px;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--dsh-todo-ink-2);
  font: inherit;
  font-size: 12px;
  cursor: pointer;
  transition: background 120ms ease, color 120ms ease;
}
.dsh-todo-clear:hover {
  background: var(--dsh-todo-tint-soft);
  color: var(--dsh-todo-ink);
}
.dsh-todo-groupform {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
}
.dsh-todo-groupform input {
  width: 220px;
  max-width: 100%;
  height: 32px;
  padding: 0 10px;
  border: 1px solid var(--dsh-todo-line-2);
  border-radius: 7px;
  background: var(--dsh-todo-field);
  color: var(--dsh-todo-ink);
  font: inherit;
  font-size: 12.5px;
  outline: none;
}
.dsh-todo-groupform input:focus { border-color: var(--dsh-todo-accent); }
.dsh-todo-groupform .dsh-todo-primary,
.dsh-todo-groupform .dsh-todo-ghost { height: 32px; }

/* notes */
.dsh-todo-note-meta {
  margin-top: 10px;
  font-family: var(--dsh-todo-mono);
  font-size: 10px;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.04em;
  color: var(--dsh-todo-ink-3);
}
.dsh-todo-note-body {
  margin: 14px 0 0 -18px;
  min-height: 400px;
  max-width: 68ch;
  padding: 16px 18px 32px;
  border: 0;
  background: transparent;
  color: var(--dsh-todo-ink);
  font-size: 15px;
  line-height: 1.72;
  outline: none;
  overflow-wrap: anywhere;
  border-radius: 12px;
  box-shadow: inset 0 0 0 1px transparent;
  transition: background 160ms ease, box-shadow 160ms ease;
}
.dsh-todo-note-body:empty::before {
  content: attr(data-placeholder);
  color: var(--dsh-todo-ink-3);
  pointer-events: none;
}
.dsh-todo-note-body:focus-visible {
  outline: none;
  background: var(--dsh-todo-tint-soft);
  box-shadow: inset 0 0 0 1px var(--dsh-todo-line-2);
}
.dsh-todo-note-body.is-dragging {
  background: var(--dsh-todo-tint-soft);
  box-shadow: inset 0 0 0 2px var(--dsh-todo-accent);
}
.dsh-todo-note-body p { margin: 0 0 0.85em; }
.dsh-todo-note-body p:last-child { margin-bottom: 0; }
.dsh-todo-note-body img {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 14px 0;
  border-radius: 10px;
}
.dsh-todo-note-body a { color: var(--dsh-todo-accent); }
.dsh-todo-note-body blockquote {
  margin: 12px 0;
  padding: 2px 0 2px 14px;
  border-left: 2px solid var(--dsh-todo-line-2);
  color: var(--dsh-todo-ink-2);
}
.dsh-todo-note-body pre,
.dsh-todo-note-body code {
  font-family: var(--dsh-todo-mono);
  font-size: 12.5px;
}
.dsh-todo-note-body pre {
  padding: 12px 14px;
  border-radius: 10px;
  background: var(--dsh-todo-field);
  overflow-x: auto;
}
.dsh-todo-note-hint {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 22px;
  color: var(--dsh-todo-ink-3);
  font-size: 11.5px;
}
.dsh-todo-note-error {
  margin-top: 10px;
  color: var(--dsh-todo-danger);
  font-size: 11.5px;
  line-height: 1.5;
}

/* empty states */
.dsh-todo-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 58px 24px 40px;
  text-align: center;
}
.dsh-todo-empty-mark {
  color: var(--dsh-todo-line-2);
  overflow: visible;
}
.dsh-todo-empty-mark .dsh-todo-mark-box { fill: none; }
.dsh-todo-empty-mark .dsh-todo-mark-checked {
  fill: var(--dsh-todo-accent);
  stroke: var(--dsh-todo-accent);
}
.dsh-todo-empty-mark .dsh-todo-mark-tick { stroke: var(--dsh-todo-accent-ink); }
.dsh-todo-empty-title {
  margin-top: 18px;
  font-size: 14px;
  font-weight: 600;
  color: var(--dsh-todo-ink);
}
.dsh-todo-empty-hint {
  margin-top: 7px;
  max-width: 36ch;
  color: var(--dsh-todo-ink-2);
  font-size: 12.5px;
  line-height: 1.6;
}
.dsh-todo-empty .dsh-todo-primary { margin-top: 18px; }

/* dialogs */
.dsh-todo-backdrop {
  position: fixed;
  inset: 0;
  z-index: 120;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgb(10 14 20 / 42%);
  backdrop-filter: blur(3px);
  animation: dsh-todo-fade 140ms ease both;
}
.dsh-todo-dialog {
  width: min(560px, 100%);
  max-height: calc(100vh - 48px);
  overflow: auto;
  padding: 24px;
  border: 1px solid var(--dsh-todo-line);
  border-radius: 16px;
  background: var(--dsh-todo-overlay);
  box-shadow: var(--dsh-todo-shadow);
  animation: dsh-todo-lift 160ms cubic-bezier(0.2, 0.7, 0.3, 1) both;
}
.dsh-todo-dialog-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 20px;
}
.dsh-todo-dialog-title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.01em;
}
.dsh-todo-field {
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-bottom: 16px;
}
.dsh-todo-field-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0 14px;
}
.dsh-todo-label {
  font-size: 11px;
  letter-spacing: 0.02em;
  color: var(--dsh-todo-ink-2);
}
.dsh-todo-control {
  width: 100%;
  height: 38px;
  padding: 0 10px;
  border: 1px solid var(--dsh-todo-line-2);
  border-radius: 8px;
  background: var(--dsh-todo-field);
  color: var(--dsh-todo-ink);
  font: inherit;
  font-size: 13px;
  outline: none;
  transition: border-color 140ms ease, box-shadow 140ms ease;
}
.dsh-todo-control:focus {
  border-color: var(--dsh-todo-accent);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--dsh-todo-accent) 14%, transparent);
}
.dsh-todo-textarea {
  min-height: 108px;
  padding: 9px 10px;
  resize: vertical;
  line-height: 1.55;
}
.dsh-todo-daterow { display: flex; align-items: center; gap: 6px; }
.dsh-todo-daterow .dsh-todo-control { flex: 1; }
.dsh-todo-dialog-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: 8px;
  padding-top: 18px;
  border-top: 1px solid var(--dsh-todo-line);
}
.dsh-todo-actions-right { display: flex; align-items: center; gap: 8px; }
.dsh-todo-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 36px;
  padding: 0 14px;
  border: 1px solid var(--dsh-todo-line-2);
  border-radius: 8px;
  background: var(--dsh-todo-tint);
  color: var(--dsh-todo-ink);
  font: inherit;
  font-size: 12.5px;
  font-weight: 600;
  cursor: pointer;
  transition: background 120ms ease, border-color 120ms ease;
}
.dsh-todo-primary:not(:disabled):hover {
  background: color-mix(in srgb, var(--dsh-todo-ink) 14%, transparent);
  border-color: color-mix(in srgb, var(--dsh-todo-ink) 30%, transparent);
}
.dsh-todo-primary:disabled {
  background: transparent;
  color: var(--dsh-todo-ink-3);
  border-color: var(--dsh-todo-line);
  cursor: default;
}
.dsh-todo-ghost {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 36px;
  padding: 0 13px;
  border: 1px solid var(--dsh-todo-line-2);
  border-radius: 8px;
  background: transparent;
  color: var(--dsh-todo-ink-2);
  font: inherit;
  font-size: 12.5px;
  cursor: pointer;
  transition: background 120ms ease, color 120ms ease;
}
.dsh-todo-ghost:hover {
  background: var(--dsh-todo-tint-soft);
  color: var(--dsh-todo-ink);
}
.dsh-todo-danger {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 34px;
  padding: 0 10px;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: var(--dsh-todo-danger);
  font: inherit;
  font-size: 12.5px;
  cursor: pointer;
  transition: background 120ms ease;
}
.dsh-todo-danger:hover { background: var(--dsh-todo-tint-soft); }
.dsh-todo-confirm-text {
  margin: 0;
  color: var(--dsh-todo-ink-2);
  font-size: 13px;
  line-height: 1.6;
}
.dsh-todo-confirm-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 22px;
}
/* date picker */
.dsh-todo-datepick { position: relative; display: inline-flex; min-width: 0; }
.dsh-todo-datebtn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  height: 30px;
  padding: 0 4px;
  border: 0;
  border-radius: 7px;
  background: transparent;
  color: var(--dsh-todo-ink-2);
  font: inherit;
  font-size: 11.5px;
  white-space: nowrap;
  cursor: pointer;
  transition: background 120ms ease, color 120ms ease;
}
.dsh-todo-datebtn-text {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
}
.dsh-todo-datebtn[data-active="true"] { color: var(--dsh-todo-ink); }
.dsh-todo-datebtn[data-state="overdue"] { color: var(--dsh-todo-danger); }
.dsh-todo-datebtn[data-state="today"] {
  color: var(--dsh-todo-accent);
  font-weight: 600;
}
.dsh-todo-composer-field .dsh-todo-datepick { height: 100%; }
.dsh-todo-field .dsh-todo-datepick { display: flex; flex: 1; min-width: 0; }
.dsh-todo-field .dsh-todo-datebtn {
  flex: 1;
  height: 38px;
  padding: 0 10px;
  border: 1px solid var(--dsh-todo-line-2);
  border-radius: 8px;
  background: var(--dsh-todo-field);
  color: var(--dsh-todo-ink);
  font-size: 13px;
  justify-content: flex-start;
}
.dsh-todo-field .dsh-todo-datebtn:hover { background: var(--dsh-todo-tint-soft); }
.dsh-todo-field .dsh-todo-datebtn[aria-expanded="true"],
.dsh-todo-field .dsh-todo-datebtn:focus-visible {
  border-color: var(--dsh-todo-accent);
  outline: none;
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--dsh-todo-accent) 14%, transparent);
}

.dsh-todo-calendar {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  z-index: 50;
  width: 252px;
  padding: 10px;
  border: 1px solid var(--dsh-todo-line-2);
  border-radius: 12px;
  background: var(--dsh-todo-raised);
  box-shadow: var(--dsh-todo-shadow);
  animation: dsh-todo-fade 120ms ease both;
}
.dsh-todo-calendar.is-up { top: auto; bottom: calc(100% + 8px); }
.dsh-todo-calendar-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  margin-bottom: 6px;
  padding-left: 4px;
}
.dsh-todo-calendar-month {
  font-family: var(--dsh-todo-mono);
  font-size: 10.5px;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: var(--dsh-todo-ink-2);
}
.dsh-todo-calendar-nav { display: flex; gap: 1px; }
.dsh-todo-calendar-nav .dsh-todo-iconbtn { width: 24px; height: 24px; }
.dsh-todo-calendar-nav .is-prev svg { transform: rotate(90deg); }
.dsh-todo-calendar-nav .is-next svg { transform: rotate(-90deg); }
.dsh-todo-calendar-week,
.dsh-todo-calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
}
.dsh-todo-calendar-week span {
  padding: 2px 0 5px;
  text-align: center;
  font-family: var(--dsh-todo-mono);
  font-size: 9px;
  letter-spacing: 0.04em;
  color: var(--dsh-todo-ink-3);
}
.dsh-todo-calendar-day {
  height: 30px;
  padding: 0;
  border: 0;
  border-radius: 7px;
  background: transparent;
  color: var(--dsh-todo-ink-2);
  font: inherit;
  font-size: 12px;
  font-variant-numeric: tabular-nums;
  cursor: pointer;
  transition: background 110ms ease, color 110ms ease;
}
.dsh-todo-calendar-day:hover {
  background: var(--dsh-todo-tint-soft);
  color: var(--dsh-todo-ink);
}
.dsh-todo-calendar-day[data-outside="true"] {
  color: var(--dsh-todo-ink-3);
  opacity: 0.5;
}
.dsh-todo-calendar-day[data-today="true"] {
  color: var(--dsh-todo-ink);
  font-weight: 600;
  box-shadow: inset 0 0 0 1px var(--dsh-todo-line-2);
}
.dsh-todo-calendar-day[data-selected="true"] {
  background: var(--dsh-todo-accent);
  color: var(--dsh-todo-accent-ink);
  font-weight: 600;
  box-shadow: none;
}
.dsh-todo-calendar-day:focus-visible {
  outline: 2px solid var(--dsh-todo-accent);
  outline-offset: 1px;
}
.dsh-todo-calendar-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
  padding-top: 7px;
  border-top: 1px solid var(--dsh-todo-line);
}
.dsh-todo-calendar-foot .dsh-todo-mini { height: 24px; padding: 0 7px; font-size: 11px; }

@keyframes dsh-todo-fade {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes dsh-todo-lift {
  from { opacity: 0; transform: translateY(6px) scale(0.985); }
  to { opacity: 1; transform: none; }
}

/* focus */
.dsh-todo-primary:focus-visible,
.dsh-todo-ghost:focus-visible,
.dsh-todo-danger:focus-visible,
.dsh-todo-iconbtn:focus-visible,
.dsh-todo-mini:focus-visible,
.dsh-todo-seg button:focus-visible,
.dsh-todo-viewtabs button:focus-visible,
.dsh-todo-reset:focus-visible,
.dsh-todo-pagerail-item:focus-visible,
.dsh-todo-rail-add:focus-visible,
.dsh-todo-newgroup:focus-visible,
.dsh-todo-clear:focus-visible,
.dsh-todo-page-delete:focus-visible,
.dsh-todo-composer-add:focus-visible,
.dsh-todo-text:focus-visible,
.dsh-todo-delete:focus-visible,
.dsh-todo-select-trigger:focus-visible,
.dsh-todo-empty .dsh-todo-primary:focus-visible {
  outline: 2px solid var(--dsh-todo-accent);
  outline-offset: 2px;
}

@container (max-width: 760px) {
  .dsh-todo-shell { padding: 24px 18px 120px; }
  .dsh-todo-masthead { margin-bottom: 22px; }
  .dsh-todo-date { display: none; }
  .dsh-todo-workspace { display: block; }
  .dsh-todo-rail {
    position: sticky;
    top: 0;
    z-index: 5;
    flex-direction: row;
    align-items: center;
    gap: 6px;
    min-height: 0;
    margin: 0 -18px 20px;
    padding: 10px 18px;
    overflow-x: auto;
    border-bottom: 1px solid var(--dsh-todo-line);
    background: var(--dsh-todo-raised);
  }
  .dsh-todo-rail-head {
    order: 9;
    margin: 0;
    padding: 0;
  }
  .dsh-todo-rail-label { display: none; }
  .dsh-todo-rail-add {
    width: 28px;
    height: 28px;
    margin: 0;
    border: 1px solid var(--dsh-todo-line-2);
    border-radius: 99px;
  }
  .dsh-todo-pagerail-item {
    flex: 0 0 auto;
    width: auto;
    padding: 6px 11px;
    border: 1px solid var(--dsh-todo-line);
    border-radius: 99px;
  }
  .dsh-todo-pagerail-item[data-active="true"] {
    border-color: transparent;
    background: var(--dsh-todo-tint);
  }
  .dsh-todo-pagerail-name { max-width: 148px; }
  .dsh-todo-pageform {
    flex: 0 0 190px;
    margin: 0;
  }
  .dsh-todo-pagehead-tools { justify-content: flex-start; }
  .dsh-todo-composer-text { flex-basis: 100%; }
  .dsh-todo-composer-add { margin-left: auto; }
}
@media (hover: none) {
  .dsh-todo-delete,
  .dsh-todo-group-actions { opacity: 1; }
}
@media (prefers-reduced-motion: reduce) {
  .dsh-todo-page * {
    transition: none !important;
    animation: none !important;
  }
}
`;

    let store = { pages: [], groups: [], tasks: [] };
    let notesStore = { notes: [] };
    const listeners = new Set();

    function emit() {
      for (const listener of listeners) listener();
    }

    function newId() {
      try {
        if (window.crypto && typeof window.crypto.randomUUID === 'function') {
          return window.crypto.randomUUID();
        }
      } catch {
        // Fall through to the timestamp id.
      }
      return 'todo-' + Date.now() + '-' + Math.random().toString(36).slice(2);
    }

    function emptyPage() {
      return { id: newId(), name: '' };
    }

    function freshStore() {
      return { pages: [emptyPage()], groups: [], tasks: [] };
    }

    function normalizeName(value) {
      return typeof value === 'string' ? value.trim() : '';
    }

    function isDateKey(value) {
      return typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value);
    }

    function sanitizeTasks(rawTasks, pages, groups) {
      const pageIds = new Set(pages.map((page) => page.id));
      const groupPage = new Map(groups.map((group) => [group.id, group.pageId]));
      const fallbackPage = pages[0].id;
      const tasks = [];
      if (!Array.isArray(rawTasks)) return tasks;
      for (const task of rawTasks) {
        if (!task || typeof task.text !== 'string' || !task.text.trim()) continue;
        const pageId = typeof task.pageId === 'string' && pageIds.has(task.pageId) ? task.pageId : fallbackPage;
        const groupId =
          typeof task.groupId === 'string' && groupPage.get(task.groupId) === pageId
            ? task.groupId
            : null;
        tasks.push({
          id: typeof task.id === 'string' && task.id ? task.id : newId(),
          text: task.text,
          notes: typeof task.notes === 'string' ? task.notes : '',
          done: task.done === true,
          createdAt: Number.isFinite(task.createdAt) ? task.createdAt : 0,
          dueDate: isDateKey(task.dueDate) ? task.dueDate : null,
          pageId,
          groupId,
        });
      }
      return tasks;
    }

    function sanitizeV3(raw) {
      if (!raw || !Array.isArray(raw.pages)) return null;
      const pages = [];
      const pageIds = new Set();
      for (const page of raw.pages) {
        if (!page || typeof page.id !== 'string' || !page.id || pageIds.has(page.id)) continue;
        pageIds.add(page.id);
        pages.push({ id: page.id, name: normalizeName(page.name) });
      }
      if (pages.length === 0) return null;
      const groups = [];
      const groupIds = new Set();
      if (Array.isArray(raw.groups)) {
        for (const group of raw.groups) {
          if (!group || typeof group.id !== 'string' || !group.id || groupIds.has(group.id)) continue;
          if (typeof group.pageId !== 'string' || !pageIds.has(group.pageId)) continue;
          const name = normalizeName(group.name);
          if (!name) continue;
          groupIds.add(group.id);
          groups.push({ id: group.id, name, pageId: group.pageId });
        }
      }
      return { pages, groups, tasks: sanitizeTasks(raw.tasks, pages, groups) };
    }

    function migrateV2(raw) {
      if (!raw || !Array.isArray(raw.groups) || !Array.isArray(raw.tasks)) return null;
      const page = emptyPage();
      const pages = [page];
      const groups = [];
      const groupIds = new Set();
      for (const group of raw.groups) {
        if (!group || typeof group.id !== 'string' || !group.id || groupIds.has(group.id)) continue;
        const name = normalizeName(group.name);
        if (!name) continue;
        groupIds.add(group.id);
        groups.push({ id: group.id, name, pageId: page.id });
      }
      return { pages, groups, tasks: sanitizeTasks(raw.tasks, pages, groups) };
    }

    function migrateV1(raw) {
      if (!Array.isArray(raw)) return null;
      const page = emptyPage();
      const pages = [page];
      const tasks = [];
      raw.forEach((item, index) => {
        if (!item || typeof item.text !== 'string' || !item.text.trim()) return;
        tasks.push({
          id: typeof item.id === 'string' && item.id ? item.id : 'todo-legacy-' + index,
          text: item.text,
          notes: '',
          done: item.done === true,
          createdAt: Number.isFinite(item.createdAt) ? item.createdAt : 0,
          dueDate: null,
          pageId: page.id,
          groupId: null,
        });
      });
      return { pages, groups: [], tasks };
    }

    function loadStore() {
      try {
        const rawV3 = window.localStorage.getItem(STORAGE_KEY);
        if (rawV3) {
          const parsed = sanitizeV3(JSON.parse(rawV3));
          return parsed || freshStore();
        }
        const rawV2 = window.localStorage.getItem(LEGACY_V2);
        if (rawV2) {
          const migrated = migrateV2(JSON.parse(rawV2));
          if (migrated) return migrated;
        }
        const rawV1 = window.localStorage.getItem(LEGACY_V1);
        if (rawV1) {
          const migrated = migrateV1(JSON.parse(rawV1));
          if (migrated) return migrated;
        }
      } catch {
        // A corrupt store falls back to a fresh page.
      }
      return freshStore();
    }

    function saveStore() {
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
      } catch {
        // Storage can be unavailable (private mode); the list still works in memory.
      }
    }

    function commit(next) {
      store = next;
      saveStore();
      emit();
    }

    function addPage(name) {
      const page = { id: newId(), name: normalizeName(name) };
      commit({ ...store, pages: [...store.pages, page] });
      return page.id;
    }

    function renamePage(id, name) {
      commit({
        ...store,
        pages: store.pages.map((page) =>
          page.id === id ? { ...page, name: normalizeName(name) } : page,
        ),
      });
    }

    function deletePage(id) {
      if (store.pages.length <= 1) return;
      commit({
        pages: store.pages.filter((page) => page.id !== id),
        groups: store.groups.filter((group) => group.pageId !== id),
        tasks: store.tasks.filter((task) => task.pageId !== id),
      });
    }

    function addGroup(pageId, name) {
      const value = normalizeName(name);
      if (!value || !store.pages.some((page) => page.id === pageId)) return;
      commit({
        ...store,
        groups: [...store.groups, { id: newId(), name: value, pageId }],
      });
    }

    function renameGroup(id, name) {
      const value = normalizeName(name);
      if (!value) return;
      commit({
        ...store,
        groups: store.groups.map((group) => (group.id === id ? { ...group, name: value } : group)),
      });
    }

    function deleteGroup(id) {
      commit({
        ...store,
        groups: store.groups.filter((group) => group.id !== id),
        tasks: store.tasks.map((task) => (task.groupId === id ? { ...task, groupId: null } : task)),
      });
    }

    function addTask({ pageId, groupId, text, dueDate }) {
      const value = typeof text === 'string' ? text.trim() : '';
      if (!value) return;
      if (!store.pages.some((page) => page.id === pageId)) return;
      const group = groupId ? store.groups.find((item) => item.id === groupId) : null;
      const nextGroupId = group && group.pageId === pageId ? group.id : null;
      commit({
        ...store,
        tasks: [
          {
            id: newId(),
            text: value,
            notes: '',
            done: false,
            createdAt: Date.now(),
            dueDate: dueDate || null,
            pageId,
            groupId: nextGroupId,
          },
          ...store.tasks,
        ],
      });
    }

    function patchTask(id, patch) {
      commit({
        ...store,
        tasks: store.tasks.map((task) => {
          if (task.id !== id) return task;
          const next = { ...task, ...patch };
          if (next.groupId) {
            const group = store.groups.find((item) => item.id === next.groupId);
            if (!group || group.pageId !== next.pageId) next.groupId = null;
          }
          return next;
        }),
      });
    }

    function toggleTask(id) {
      commit({
        ...store,
        tasks: store.tasks.map((task) => (task.id === id ? { ...task, done: !task.done } : task)),
      });
    }

    function removeTask(id) {
      commit({ ...store, tasks: store.tasks.filter((task) => task.id !== id) });
    }

    function clearCompleted(pageId) {
      commit({
        ...store,
        tasks: store.tasks.filter((task) => !(task.pageId === pageId && task.done)),
      });
    }

    const NOTE_TAGS = new Set([
      'P',
      'DIV',
      'BR',
      'B',
      'STRONG',
      'I',
      'EM',
      'U',
      'S',
      'UL',
      'OL',
      'LI',
      'BLOCKQUOTE',
      'CODE',
      'PRE',
      'A',
      'IMG',
      'H1',
      'H2',
      'H3',
    ]);

    function sanitizeNoteHtml(html) {
      if (typeof html !== 'string') return '';
      if (typeof document === 'undefined') return html;
      const template = document.createElement('template');
      template.innerHTML = html;

      function cleanChildren(parent) {
        for (const node of Array.from(parent.childNodes)) {
          if (node.nodeType === 3) continue;
          if (node.nodeType !== 1) {
            node.remove();
            continue;
          }
          const tag = node.tagName;
          if (!NOTE_TAGS.has(tag)) {
            cleanChildren(node);
            const fragment = document.createDocumentFragment();
            while (node.firstChild) fragment.appendChild(node.firstChild);
            node.replaceWith(fragment);
            continue;
          }
          for (const attribute of Array.from(node.attributes)) {
            const name = attribute.name.toLowerCase();
            if (tag === 'A' && name === 'href') {
              if (!/^(https?:|mailto:)/i.test(attribute.value)) {
                node.removeAttribute(name);
              } else {
                node.setAttribute('target', '_blank');
                node.setAttribute('rel', 'noopener noreferrer');
              }
              continue;
            }
            if (tag === 'IMG' && name === 'src') {
              if (!/^data:image\/(png|jpe?g|webp|gif);base64,/i.test(attribute.value)) {
                node.removeAttribute(name);
              }
              continue;
            }
            if (tag === 'IMG' && name === 'alt') continue;
            node.removeAttribute(name);
          }
          if (tag === 'IMG' && !node.getAttribute('src')) {
            node.remove();
            continue;
          }
          cleanChildren(node);
        }
      }

      cleanChildren(template.content);
      return template.innerHTML;
    }

    function sanitizeNote(raw) {
      if (!raw || typeof raw.id !== 'string' || !raw.id) return null;
      return {
        id: raw.id,
        title: normalizeName(raw.title),
        html: sanitizeNoteHtml(raw.html),
        createdAt: Number.isFinite(raw.createdAt) ? raw.createdAt : 0,
        updatedAt: Number.isFinite(raw.updatedAt) ? raw.updatedAt : 0,
      };
    }

    function loadNotes() {
      try {
        const raw = window.localStorage.getItem(NOTES_KEY);
        if (!raw) return { notes: [] };
        const parsed = JSON.parse(raw);
        if (!parsed || !Array.isArray(parsed.notes)) return { notes: [] };
        const notes = [];
        const ids = new Set();
        for (const item of parsed.notes) {
          const note = sanitizeNote(item);
          if (!note || ids.has(note.id)) continue;
          ids.add(note.id);
          notes.push(note);
        }
        return { notes };
      } catch {
        return { notes: [] };
      }
    }

    function saveNotes() {
      try {
        window.localStorage.setItem(NOTES_KEY, JSON.stringify(notesStore));
        return true;
      } catch {
        return false;
      }
    }

    function commitNotes(next) {
      notesStore = next;
      const saved = saveNotes();
      emit();
      return saved;
    }

    function addNote() {
      const now = Date.now();
      const note = { id: newId(), title: '', html: '', createdAt: now, updatedAt: now };
      commitNotes({ notes: [note, ...notesStore.notes] });
      return note.id;
    }

    function patchNote(id, patch) {
      let found = false;
      const notes = notesStore.notes.map((note) => {
        if (note.id !== id) return note;
        found = true;
        const next = { ...note };
        if (Object.prototype.hasOwnProperty.call(patch, 'title')) next.title = normalizeName(patch.title);
        if (Object.prototype.hasOwnProperty.call(patch, 'html')) next.html = sanitizeNoteHtml(patch.html);
        next.updatedAt = Date.now();
        return next;
      });
      if (!found) return false;
      return commitNotes({ notes });
    }

    function removeNote(id) {
      commitNotes({ notes: notesStore.notes.filter((note) => note.id !== id) });
    }

    function pad2(value) {
      return String(value).padStart(2, '0');
    }

    function toDateKey(date) {
      return date.getFullYear() + '-' + pad2(date.getMonth() + 1) + '-' + pad2(date.getDate());
    }

    function todayKey() {
      return toDateKey(new Date());
    }

    function addDays(key, days) {
      const [year, month, day] = key.split('-').map(Number);
      return toDateKey(new Date(year, month - 1, day + days));
    }

    function parseDateKey(key) {
      if (!isDateKey(key)) return null;
      const [year, month, day] = key.split('-').map(Number);
      return { year, month: month - 1, day };
    }

    function monthCells(year, month) {
      const start = new Date(year, month, 1);
      const offset = start.getDay();
      const cells = [];
      for (let index = 0; index < 42; index += 1) {
        const date = new Date(year, month, 1 - offset + index);
        cells.push({
          key: toDateKey(date),
          day: date.getDate(),
          outside: date.getMonth() !== month,
        });
      }
      return cells;
    }

    function dueState(task) {
      if (!task.dueDate) return 'none';
      const today = todayKey();
      if (task.dueDate < today) return task.done ? 'past' : 'overdue';
      if (task.dueDate === today) return 'today';
      if (task.dueDate === addDays(today, 1)) return 'tomorrow';
      return 'upcoming';
    }

    function formatDueDate(value, lang) {
      try {
        const [year, month, day] = value.split('-').map(Number);
        const date = new Date(year, month - 1, day);
        const sameYear = date.getFullYear() === new Date().getFullYear();
        return new Intl.DateTimeFormat(
          lang,
          sameYear ? { month: 'short', day: 'numeric' } : { year: 'numeric', month: 'short', day: 'numeric' },
        ).format(date);
      } catch {
        return value;
      }
    }

    function formatStamp(lang) {
      try {
        return new Intl.DateTimeFormat(lang, {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
        }).format(new Date());
      } catch {
        return '';
      }
    }

    function formatNoteStamp(ts, lang) {
      if (!ts) return '';
      try {
        const date = new Date(ts);
        if (toDateKey(date) === todayKey()) {
          return new Intl.DateTimeFormat(lang, { hour: 'numeric', minute: '2-digit' }).format(date);
        }
        return new Intl.DateTimeFormat(lang, { month: 'short', day: 'numeric' }).format(date);
      } catch {
        return '';
      }
    }

    function useStore() {
      const [, force] = React.useState(0);
      React.useEffect(() => {
        const listener = () => force((n) => n + 1);
        listeners.add(listener);
        return () => {
          listeners.delete(listener);
        };
      }, []);
      return store;
    }

    function useNotesStore() {
      const [, force] = React.useState(0);
      React.useEffect(() => {
        const listener = () => force((n) => n + 1);
        listeners.add(listener);
        return () => {
          listeners.delete(listener);
        };
      }, []);
      return notesStore;
    }

    function useLocaleTick(locale) {
      const [, force] = React.useState(0);
      React.useEffect(() => locale.subscribe(() => force((n) => n + 1)), [locale]);
    }

    function useDarkMode() {
      const read = () =>
        typeof document !== 'undefined' &&
        document.body &&
        document.body.hasAttribute('data-ds-dark-theme');
      const [dark, setDark] = React.useState(read);
      React.useEffect(() => {
        if (typeof document === 'undefined' || !document.body || typeof MutationObserver === 'undefined') {
          return undefined;
        }
        const target = document.body;
        const sync = () => setDark(target.hasAttribute('data-ds-dark-theme'));
        sync();
        const observer = new MutationObserver(sync);
        observer.observe(target, { attributes: true, attributeFilter: ['data-ds-dark-theme'] });
        return () => observer.disconnect();
      }, []);
      return dark;
    }

    function ListMark({ size = 46 }) {
      const row = (offset, width) => [
        h('rect', {
          key: 'box' + offset,
          className: 'dsh-todo-mark-box',
          x: 1.75,
          y: offset + 0.75,
          width: 10,
          height: 10,
          rx: 3,
          stroke: 'currentColor',
          strokeWidth: 1.5,
        }),
        h('path', {
          key: 'line' + offset,
          className: 'dsh-todo-mark-line',
          d: 'M18 ' + (offset + 5.75) + 'h' + width,
          stroke: 'currentColor',
          strokeWidth: 1.5,
          strokeLinecap: 'round',
        }),
      ];
      return h(
        'svg',
        {
          className: 'dsh-todo-empty-mark',
          width: size,
          height: Math.round(size * 0.8),
          viewBox: '0 0 46 37',
          fill: 'none',
          'aria-hidden': 'true',
          style: { display: 'block' },
        },
        h('rect', {
          className: 'dsh-todo-mark-box dsh-todo-mark-checked',
          x: 1.75,
          y: 1.75,
          width: 10,
          height: 10,
          rx: 3,
          stroke: 'currentColor',
          strokeWidth: 1.5,
        }),
        h('path', {
          className: 'dsh-todo-mark-tick',
          d: 'M4.6 6.9l2.1 2.1 3.9-4.4',
          stroke: 'currentColor',
          strokeWidth: 1.7,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        }),
        h('path', {
          className: 'dsh-todo-mark-line',
          d: 'M18 6.75h25',
          stroke: 'currentColor',
          strokeWidth: 1.5,
          strokeLinecap: 'round',
        }),
        row(12, 25),
        row(24, 19),
      );
    }

    function PlusIcon({ size = 14 }) {
      return h(
        'svg',
        { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', 'aria-hidden': 'true' },
        h('path', { d: 'M12 5v14M5 12h14' }),
      );
    }

    function CheckIcon({ size = 14 }) {
      return h(
        'svg',
        { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true' },
        h('path', { d: 'M5 12.5l4.5 4.5L19 7.5' }),
      );
    }

    function XIcon({ size = 14 }) {
      return h(
        'svg',
        { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', 'aria-hidden': 'true' },
        h('path', { d: 'M6 6l12 12M18 6L6 18' }),
      );
    }

    function NoteIcon({ size = 13 }) {
      return h(
        'svg',
        { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', 'aria-hidden': 'true' },
        h('path', { d: 'M5 7h14M5 12h14M5 17h9' }),
      );
    }

    function CalendarIcon({ size = 12 }) {
      return h(
        'svg',
        { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true' },
        h('rect', { x: 3.5, y: 5, width: 17, height: 15, rx: 2.5 }),
        h('path', { d: 'M8 3.5v3M16 3.5v3M3.5 10h17' }),
      );
    }

    function ChevronDownIcon({ size = 11 }) {
      return h(
        'svg',
        { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true' },
        h('path', { d: 'M6 9l6 6 6-6' }),
      );
    }

    function ImageIcon({ size = 13 }) {
      return h(
        'svg',
        { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true' },
        h('rect', { x: 3.5, y: 4.5, width: 17, height: 15, rx: 2.5 }),
        h('circle', { cx: 8.5, cy: 9.5, r: 1.4 }),
        h('path', { d: 'M4.5 17l4.7-4.7 3.2 3.2 2.1-2.1 5 5' }),
      );
    }

    function TrashIcon({ size = 14 }) {
      return h(
        'svg',
        { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true' },
        h('path', { d: 'M4 7h16' }),
        h('path', { d: 'M9 7V4.8c0-.4.3-.8.8-.8h4.4c.5 0 .8.4.8.8V7' }),
        h('path', { d: 'M6.5 7l.8 12.2c0 .5.4.8.9.8h7.6c.5 0 .9-.3.9-.8L17.5 7' }),
        h('path', { d: 'M10 11v5M14 11v5' }),
      );
    }

    function TodoIcon({ size = 20, active }) {
      return h(
        'svg',
        {
          width: size,
          height: size,
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: active ? 2 : 1.7,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          'aria-hidden': 'true',
          style: { display: 'block' },
        },
        h('rect', { x: 3.5, y: 4.5, width: 4.5, height: 4.5, rx: 1.2 }),
        h('path', { d: 'M4.7 6.75l1.1 1.1 1.8-2.1' }),
        h('path', { d: 'M11.5 6.75h9' }),
        h('rect', { x: 3.5, y: 14.75, width: 4.5, height: 4.5, rx: 1.2 }),
        h('path', { d: 'M11.5 17h9' }),
      );
    }

    return {
      inject: ['slots', 'locale'],
      apply(ctx) {
        store = loadStore();
        saveStore();
        notesStore = loadNotes();
        saveNotes();
        const t = ctx.locale.bind(NS);

        ctx.effect(() => {
          const offEn = ctx.locale.register(NS, 'en', EN);
          const offZh = ctx.locale.register(NS, 'zh', ZH);
          return () => {
            offEn();
            offZh();
          };
        }, 'dsh-todo: dictionaries');

        ctx.effect(() => {
          const onStorage = (event) => {
            if (event.key !== null && event.key !== STORAGE_KEY && event.key !== NOTES_KEY) return;
            store = loadStore();
            notesStore = loadNotes();
            emit();
          };
          window.addEventListener('storage', onStorage);
          return () => window.removeEventListener('storage', onStorage);
        }, 'dsh-todo: cross-tab sync');

        function TaskRow({ task, onOpen, onToggle, onRemove, t, lang }) {
          const state = dueState(task);
          const dueText =
            state === 'today'
              ? t('dueToday')
              : state === 'tomorrow'
                ? t('dueTomorrow')
                : formatDueDate(task.dueDate, lang);
          return h(
            'li',
            { className: 'dsh-todo-row', 'data-done': task.done ? 'true' : 'false' },
            h(
              'label',
              { className: 'dsh-todo-checkwrap', title: task.done ? t('markActive') : t('markDone') },
              h('input', {
                type: 'checkbox',
                className: 'dsh-todo-check',
                checked: task.done,
                onChange: () => onToggle(task.id),
                'aria-label': task.done ? t('markActive') : t('markDone'),
              }),
              h('span', { className: 'dsh-todo-cbox', 'aria-hidden': 'true' }, h(CheckIcon, { size: 12 })),
            ),
            h(
              'button',
              {
                type: 'button',
                className: 'dsh-todo-text',
                onClick: onOpen,
                title: t('openTask'),
                'aria-haspopup': 'dialog',
              },
              task.text,
            ),
            h(
              'span',
              {
                className: 'dsh-todo-note',
                title: task.notes.trim() ? t('hasDetails') : undefined,
                'aria-label': task.notes.trim() ? t('hasDetails') : undefined,
              },
              task.notes.trim() ? h(NoteIcon) : null,
            ),
            h(
              'span',
              {
                className: 'dsh-todo-due',
                'data-state': task.dueDate ? state : 'none',
                title: task.dueDate || undefined,
              },
              task.dueDate ? h(CalendarIcon) : null,
              task.dueDate ? dueText : null,
            ),
            h(
              'button',
              {
                type: 'button',
                className: 'dsh-todo-delete',
                onClick: (event) => {
                  event.stopPropagation();
                  onRemove(task.id);
                },
                'aria-label': t('deleteTask'),
                title: t('deleteTask'),
              },
              h(TrashIcon),
            ),
          );
        }

        function Masthead({ view, onView, t, lang }) {
          const tabs = [
            ['tasks', t('viewTasks')],
            ['notes', t('viewNotes')],
          ];
          return h(
            'header',
            { className: 'dsh-todo-masthead' },
            h('div', { className: 'dsh-todo-wordmark' }, 'TO DO'),
            h(
              'div',
              { className: 'dsh-todo-masthead-right' },
              h(
                'div',
                { className: 'dsh-todo-viewtabs', role: 'tablist', 'aria-label': t('viewsLabel') },
                tabs.map(([id, label]) =>
                  h(
                    'button',
                    {
                      key: id,
                      type: 'button',
                      role: 'tab',
                      'aria-selected': view === id,
                      onClick: () => onView(id),
                    },
                    label,
                  ),
                ),
              ),
              h('div', { className: 'dsh-todo-date' }, formatStamp(lang)),
            ),
          );
        }

        function SelectMenu({
          value,
          options,
          onChange,
          ariaLabel,
          className = '',
          icon: Icon = null,
          menuUp = false,
          active = false,
        }) {
          const [open, setOpen] = React.useState(false);
          const rootRef = React.useRef(null);
          const current = options.find((option) => option.value === value) || options[0];

          React.useEffect(() => {
            if (!open) return undefined;
            function onPointerDown(event) {
              if (rootRef.current && !rootRef.current.contains(event.target)) setOpen(false);
            }
            function onKeyDown(event) {
              if (event.key === 'Escape') setOpen(false);
            }
            document.addEventListener('mousedown', onPointerDown);
            document.addEventListener('keydown', onKeyDown);
            return () => {
              document.removeEventListener('mousedown', onPointerDown);
              document.removeEventListener('keydown', onKeyDown);
            };
          }, [open]);

          return h(
            'span',
            {
              className: 'dsh-todo-select',
              ref: rootRef,
              onKeyDown: (event) => {
                if (open && event.key === 'Escape') {
                  event.stopPropagation();
                  setOpen(false);
                }
              },
            },
            h(
              'button',
              {
                type: 'button',
                className: 'dsh-todo-select-trigger ' + className,
                'data-active': active ? 'true' : 'false',
                onClick: () => setOpen((valueNow) => !valueNow),
                'aria-haspopup': 'listbox',
                'aria-expanded': open,
                'aria-label': ariaLabel,
                title: ariaLabel,
              },
              Icon ? h(Icon) : null,
              h('span', { className: 'dsh-todo-select-value' }, current ? current.label : ''),
              h('span', { className: 'dsh-todo-select-caret' }, h(ChevronDownIcon)),
            ),
            open
              ? h(
                  'div',
                  {
                    className: 'dsh-todo-select-menu' + (menuUp ? ' is-up' : ''),
                    role: 'listbox',
                    'aria-label': ariaLabel,
                  },
                  options.map((option) =>
                    h(
                      'button',
                      {
                        key: option.value,
                        type: 'button',
                        role: 'option',
                        'aria-selected': option.value === value,
                        className: 'dsh-todo-select-option',
                        autoFocus: option.value === value,
                        onClick: () => {
                          onChange(option.value);
                          setOpen(false);
                        },
                      },
                      h('span', { className: 'dsh-todo-select-option-label' }, option.label),
                      h('span', { className: 'dsh-todo-select-check' }, h(CheckIcon, { size: 12 })),
                    ),
                  ),
                )
              : null,
          );
        }

        function DatePicker({ value, onChange, ariaLabel, t, lang, menuUp = false }) {
          const [open, setOpen] = React.useState(false);
          const [view, setView] = React.useState(() => {
            const parsed = parseDateKey(value) || parseDateKey(todayKey());
            return { year: parsed.year, month: parsed.month };
          });
          const [focusKey, setFocusKey] = React.useState(value || todayKey());
          const rootRef = React.useRef(null);
          const today = todayKey();

          React.useEffect(() => {
            if (!open) return undefined;
            function onPointerDown(event) {
              if (rootRef.current && !rootRef.current.contains(event.target)) setOpen(false);
            }
            function onKeyDown(event) {
              if (event.key === 'Escape') setOpen(false);
            }
            document.addEventListener('mousedown', onPointerDown);
            document.addEventListener('keydown', onKeyDown);
            return () => {
              document.removeEventListener('mousedown', onPointerDown);
              document.removeEventListener('keydown', onKeyDown);
            };
          }, [open]);

          function openPicker() {
            const parsed = parseDateKey(value) || parseDateKey(today);
            setView({ year: parsed.year, month: parsed.month });
            setFocusKey(value || today);
            setOpen(true);
          }

          function pick(key) {
            onChange(key);
            setOpen(false);
          }

          function shiftMonth(delta) {
            const next = new Date(view.year, view.month + delta, 1);
            setView({ year: next.getFullYear(), month: next.getMonth() });
          }

          function focusDay(key) {
            setFocusKey(key);
            const parsed = parseDateKey(key);
            if (parsed.year !== view.year || parsed.month !== view.month) {
              setView({ year: parsed.year, month: parsed.month });
            }
            const reveal = () => {
              if (!rootRef.current) return;
              const node = rootRef.current.querySelector('[data-day="' + key + '"]');
              if (node) node.focus();
            };
            if (typeof window !== 'undefined' && typeof window.requestAnimationFrame === 'function') {
              window.requestAnimationFrame(reveal);
            }
          }

          function onGridKeyDown(event) {
            const steps = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 };
            const step = steps[event.key];
            if (!step) return;
            event.preventDefault();
            focusDay(addDays(focusKey, step));
          }

          const state = value ? dueState({ dueDate: value, done: false }) : 'none';
          const label = value
            ? state === 'today'
              ? t('dueToday')
              : state === 'tomorrow'
                ? t('dueTomorrow')
                : formatDueDate(value, lang)
            : t('setDate');
          const weekdays = lang === 'zh' ? ['日', '一', '二', '三', '四', '五', '六'] : ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
          let monthLabel = '';
          try {
            monthLabel = new Date(view.year, view.month, 1).toLocaleDateString(lang === 'zh' ? 'zh-Hant' : 'en', {
              year: 'numeric',
              month: 'long',
            });
          } catch (error) {
            monthLabel = view.year + '-' + pad2(view.month + 1);
          }

          return h(
            'span',
            { className: 'dsh-todo-datepick', ref: rootRef },
            h(
              'button',
              {
                type: 'button',
                className: 'dsh-todo-datebtn',
                onClick: () => (open ? setOpen(false) : openPicker()),
                'aria-haspopup': 'dialog',
                'aria-expanded': open,
                'aria-label': ariaLabel,
                title: value ? formatDueDate(value, lang) : t('setDate'),
                'data-active': value ? 'true' : 'false',
                'data-state': state,
              },
              h(CalendarIcon),
              h('span', { className: 'dsh-todo-datebtn-text' }, label),
            ),
            open
              ? h(
                  'div',
                  {
                    className: 'dsh-todo-calendar' + (menuUp ? ' is-up' : ''),
                    role: 'dialog',
                    'aria-label': ariaLabel,
                  },
                  h(
                    'div',
                    { className: 'dsh-todo-calendar-head' },
                    h('div', { className: 'dsh-todo-calendar-month' }, monthLabel),
                    h(
                      'div',
                      { className: 'dsh-todo-calendar-nav' },
                      h(
                        'button',
                        {
                          type: 'button',
                          className: 'dsh-todo-iconbtn is-prev',
                          onClick: () => shiftMonth(-1),
                          'aria-label': t('prevMonth'),
                          title: t('prevMonth'),
                        },
                        h(ChevronDownIcon),
                      ),
                      h(
                        'button',
                        {
                          type: 'button',
                          className: 'dsh-todo-iconbtn is-next',
                          onClick: () => shiftMonth(1),
                          'aria-label': t('nextMonth'),
                          title: t('nextMonth'),
                        },
                        h(ChevronDownIcon),
                      ),
                    ),
                  ),
                  h(
                    'div',
                    { className: 'dsh-todo-calendar-week' },
                    weekdays.map((label2, index) => h('span', { key: index }, label2)),
                  ),
                  h(
                    'div',
                    { className: 'dsh-todo-calendar-grid', onKeyDown: onGridKeyDown },
                    monthCells(view.year, view.month).map((cell) =>
                      h(
                        'button',
                        {
                          key: cell.key,
                          type: 'button',
                          className: 'dsh-todo-calendar-day',
                          'data-day': cell.key,
                          'data-outside': cell.outside ? 'true' : 'false',
                          'data-today': cell.key === today ? 'true' : 'false',
                          'data-selected': cell.key === value ? 'true' : 'false',
                          tabIndex: cell.key === focusKey ? 0 : -1,
                          autoFocus: cell.key === focusKey,
                          onClick: () => pick(cell.key),
                        },
                        String(cell.day),
                      ),
                    ),
                  ),
                  h(
                    'div',
                    { className: 'dsh-todo-calendar-foot' },
                    h('button', { type: 'button', className: 'dsh-todo-mini', onClick: () => pick(today) }, t('dueToday')),
                    value
                      ? h('button', { type: 'button', className: 'dsh-todo-mini', onClick: () => pick('') }, t('clearDate'))
                      : null,
                  ),
                )
              : null,
          );
        }

        function PageRail({ pages, stats, activeId, onSelect, onCreate, t }) {
          const [creating, setCreating] = React.useState(false);
          const [draft, setDraft] = React.useState('');

          function submit(event) {
            event.preventDefault();
            if (!draft.trim()) return;
            onCreate(draft);
            setDraft('');
            setCreating(false);
          }

          function cancel() {
            setDraft('');
            setCreating(false);
          }

          return h(
            'nav',
            { className: 'dsh-todo-rail', 'aria-label': t('pages') },
            h(
              'div',
              { className: 'dsh-todo-rail-head' },
              h('div', { className: 'dsh-todo-rail-label' }, t('pages')),
              h(
                'button',
                {
                  type: 'button',
                  className: 'dsh-todo-rail-add',
                  onClick: () => setCreating(true),
                  'aria-label': t('newPage'),
                  title: t('newPage'),
                },
                h(PlusIcon, { size: 14 }),
              ),
            ),
            pages.map((page) => {
              const item = stats.get(page.id) || { open: 0, done: 0, total: 0 };
              const label = page.name || t('defaultPageName');
              return h(
                'button',
                {
                  key: page.id,
                  type: 'button',
                  className: 'dsh-todo-pagerail-item',
                  'data-active': page.id === activeId,
                  'aria-current': page.id === activeId ? 'page' : undefined,
                  onClick: () => onSelect(page.id),
                  title: label,
                },
                h(
                  'span',
                  { className: 'dsh-todo-pagerail-top' },
                  h('span', { className: 'dsh-todo-pagerail-name' }, label),
                  item.open > 0
                    ? h('span', { className: 'dsh-todo-pagerail-count' }, String(item.open))
                    : null,
                ),
              );
            }),
            creating
              ? h(
                  'form',
                  { className: 'dsh-todo-pageform', onSubmit: submit },
                  h('input', {
                    value: draft,
                    onChange: (event) => setDraft(event.target.value),
                    onKeyDown: (event) => {
                      if (event.key === 'Escape') {
                        event.stopPropagation();
                        cancel();
                      }
                    },
                    placeholder: t('pageName'),
                    'aria-label': t('pageName'),
                    autoFocus: true,
                    autoComplete: 'off',
                  }),
                  h(
                    'div',
                    { className: 'dsh-todo-form-actions' },
                    h('button', { type: 'button', className: 'dsh-todo-mini', onClick: cancel }, t('cancel')),
                    h('button', { type: 'submit', className: 'dsh-todo-mini dsh-todo-mini-primary', disabled: !draft.trim() }, t('add')),
                  ),
                )
              : null,
          );
        }

        function readImageFile(file) {
          return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => resolve(typeof reader.result === 'string' ? reader.result : null);
            reader.onerror = () => resolve(null);
            reader.readAsDataURL(file);
          });
        }

        function loadImageElement(src) {
          return new Promise((resolve) => {
            const image = new Image();
            image.onload = () => resolve(image);
            image.onerror = () => resolve(null);
            image.src = src;
          });
        }

        async function compressImageFile(file) {
          if (!file || !/^image\/(png|jpe?g|webp|gif)$/i.test(file.type || '')) return null;
          const source = await readImageFile(file);
          if (!source) return null;
          const image = await loadImageElement(source);
          if (!image) return source;
          const max = 1400;
          const scale = Math.min(1, max / Math.max(image.width, image.height));
          if (scale === 1 && file.size <= 400000) return source;
          const canvas = document.createElement('canvas');
          canvas.width = Math.max(1, Math.round(image.width * scale));
          canvas.height = Math.max(1, Math.round(image.height * scale));
          const context = canvas.getContext('2d');
          if (!context) return source;
          context.drawImage(image, 0, 0, canvas.width, canvas.height);
          let output = canvas.toDataURL('image/webp', 0.82);
          if (!/^data:image\/webp/i.test(output)) output = canvas.toDataURL('image/jpeg', 0.84);
          return output && output.length < source.length ? output : source;
        }

        function caretRangeAt(x, y) {
          if (typeof document === 'undefined') return null;
          if (typeof document.caretRangeFromPoint === 'function') {
            return document.caretRangeFromPoint(x, y);
          }
          if (typeof document.caretPositionFromPoint === 'function') {
            const position = document.caretPositionFromPoint(x, y);
            if (position) {
              const range = document.createRange();
              range.setStart(position.offsetNode, position.offset);
              range.collapse(true);
              return range;
            }
          }
          return null;
        }

        function insertImageAtRange(editor, range, src, alt) {
          if (!editor) return;
          editor.focus();
          let target = range;
          if (!target || !editor.contains(target.startContainer)) {
            target = document.createRange();
            target.selectNodeContents(editor);
            target.collapse(false);
          }
          const image = document.createElement('img');
          image.src = src;
          image.alt = alt || '';
          target.deleteContents();
          target.insertNode(image);
          const after = document.createRange();
          after.setStartAfter(image);
          after.collapse(true);
          const selection = window.getSelection();
          if (selection) {
            selection.removeAllRanges();
            selection.addRange(after);
          }
        }

        function NoteRail({ notes, activeId, onSelect, onCreate, t, lang }) {
          return h(
            'nav',
            { className: 'dsh-todo-rail', 'aria-label': t('notes') },
            h(
              'div',
              { className: 'dsh-todo-rail-head' },
              h('div', { className: 'dsh-todo-rail-label' }, t('notes')),
              h(
                'button',
                {
                  type: 'button',
                  className: 'dsh-todo-rail-add',
                  onClick: onCreate,
                  'aria-label': t('newNote'),
                  title: t('newNote'),
                },
                h(PlusIcon, { size: 14 }),
              ),
            ),
            notes.map((note) => {
              const label = note.title || t('untitledNote');
              return h(
                'button',
                {
                  key: note.id,
                  type: 'button',
                  className: 'dsh-todo-pagerail-item',
                  'data-active': note.id === activeId,
                  'aria-current': note.id === activeId ? 'page' : undefined,
                  onClick: () => onSelect(note.id),
                  title: label,
                },
                h(
                  'span',
                  { className: 'dsh-todo-pagerail-top' },
                  h('span', { className: 'dsh-todo-pagerail-name' }, label),
                ),
                h('span', { className: 'dsh-todo-pagerail-date' }, formatNoteStamp(note.updatedAt, lang)),
              );
            }),
          );
        }

        function NoteEditor({ note, onPatch, onDelete, t, lang }) {
          const [title, setTitle] = React.useState(note.title);
          const [dragging, setDragging] = React.useState(false);
          const [error, setError] = React.useState(false);
          const [confirming, setConfirming] = React.useState(false);
          const bodyRef = React.useRef(null);
          const titleRef = React.useRef(note.title);
          const titleTimer = React.useRef(null);
          const bodyTimer = React.useRef(null);
          const initialHtml = React.useRef(note.html);

          React.useEffect(() => {
            setTitle(note.title);
            titleRef.current = note.title;
          }, [note.id]);

          React.useEffect(
            () => () => {
              if (titleTimer.current) {
                clearTimeout(titleTimer.current);
                onPatch(note.id, { title: titleRef.current });
              }
              if (bodyTimer.current) {
                clearTimeout(bodyTimer.current);
                if (bodyRef.current) onPatch(note.id, { html: bodyRef.current.innerHTML });
              }
            },
            [],
          );

          function saveTitle() {
            if (titleTimer.current) {
              clearTimeout(titleTimer.current);
              titleTimer.current = null;
            }
            const saved = onPatch(note.id, { title: titleRef.current });
            setError(!saved);
          }

          function saveBody() {
            if (bodyTimer.current) {
              clearTimeout(bodyTimer.current);
              bodyTimer.current = null;
            }
            if (!bodyRef.current) return;
            const saved = onPatch(note.id, { html: bodyRef.current.innerHTML });
            setError(!saved);
          }

          function changeTitle(event) {
            const value = event.target.value;
            titleRef.current = value;
            setTitle(value);
            if (titleTimer.current) clearTimeout(titleTimer.current);
            titleTimer.current = setTimeout(saveTitle, 450);
          }

          function changeBody() {
            if (bodyTimer.current) clearTimeout(bodyTimer.current);
            bodyTimer.current = setTimeout(saveBody, 500);
          }

          async function addImageFiles(files, range) {
            const images = (files || []).filter((file) => /^image\/(png|jpe?g|webp|gif)$/i.test(file.type || ''));
            if (images.length === 0) return;
            const sources = [];
            for (const file of images) {
              const source = await compressImageFile(file);
              if (source) sources.push(source);
            }
            for (const source of sources) {
              insertImageAtRange(bodyRef.current, range, source, t('noteImageAlt'));
            }
            if (sources.length > 0) saveBody();
          }

          function handleDrop(event) {
            event.preventDefault();
            setDragging(false);
            if (!event.dataTransfer) return;
            const range = caretRangeAt(event.clientX, event.clientY);
            addImageFiles(Array.from(event.dataTransfer.files || []), range);
          }

          function handlePaste(event) {
            const files = Array.from((event.clipboardData && event.clipboardData.files) || []);
            const hasImage = files.some((file) => /^image\//i.test(file.type || ''));
            if (!hasImage) {
              const html =
                event.clipboardData && typeof event.clipboardData.getData === 'function'
                  ? event.clipboardData.getData('text/html')
                  : '';
              if (!html) return;
              event.preventDefault();
              const clean = sanitizeNoteHtml(html);
              if (typeof document !== 'undefined' && typeof document.execCommand === 'function') {
                document.execCommand('insertHTML', false, clean);
              }
              changeBody();
              return;
            }
            event.preventDefault();
            let range = null;
            const selection = window.getSelection();
            if (selection && selection.rangeCount > 0) {
              const candidate = selection.getRangeAt(0);
              if (bodyRef.current && bodyRef.current.contains(candidate.startContainer)) range = candidate;
            }
            addImageFiles(files, range);
          }

          const stamp = formatNoteStamp(note.updatedAt, lang);
          return h(
            'div',
            null,
            h(
              'header',
              { className: 'dsh-todo-pagehead' },
              h(
                'div',
                { className: 'dsh-todo-pagehead-main' },
                h('input', {
                  className: 'dsh-todo-titleinput',
                  value: title,
                  onChange: changeTitle,
                  onBlur: saveTitle,
                  onKeyDown: (event) => {
                    if (event.key === 'Enter') {
                      event.preventDefault();
                      event.currentTarget.blur();
                    }
                  },
                  placeholder: t('noteTitle'),
                  'aria-label': t('noteTitle'),
                  autoFocus: !note.title,
                  spellCheck: false,
                }),
                stamp ? h('div', { className: 'dsh-todo-note-meta' }, t('edited').replace('{date}', stamp)) : null,
              ),
              h(
                'div',
                { className: 'dsh-todo-pagehead-tools' },
                h(
                  'button',
                  {
                    type: 'button',
                    className: 'dsh-todo-page-delete',
                    onClick: () => setConfirming(true),
                    'aria-label': t('deleteNote'),
                    title: t('deleteNote'),
                  },
                  h(TrashIcon),
                ),
              ),
            ),
            h('div', {
              className: 'dsh-todo-note-body' + (dragging ? ' is-dragging' : ''),
              contentEditable: true,
              suppressContentEditableWarning: true,
              ref: bodyRef,
              'data-placeholder': t('noteBodyPlaceholder'),
              'aria-label': t('noteBodyPlaceholder'),
              dangerouslySetInnerHTML: { __html: initialHtml.current },
              onInput: changeBody,
              onBlur: saveBody,
              onDragEnter: (event) => {
                event.preventDefault();
                setDragging(true);
              },
              onDragOver: (event) => {
                event.preventDefault();
                setDragging(true);
              },
              onDragLeave: (event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setDragging(false);
              },
              onDrop: handleDrop,
              onPaste: handlePaste,
            }),
            h('div', { className: 'dsh-todo-note-hint' }, h(ImageIcon), t('noteHint')),
            error ? h('div', { className: 'dsh-todo-note-error' }, t('noteSaveError')) : null,
            confirming
              ? h(ConfirmDialog, {
                  title: t('deleteNote'),
                  message: t('deleteNoteWarning').replace('{name}', title || t('untitledNote')),
                  confirmLabel: t('deleteNote'),
                  onConfirm: () => {
                    setConfirming(false);
                    onDelete(note.id);
                  },
                  onClose: () => setConfirming(false),
                  t,
                })
              : null,
          );
        }

        function NotesView({ notes, activeId, onSelect, onCreate, onPatch, onDelete, t, lang }) {
          const activeNote = notes.find((note) => note.id === activeId);
          return h(
            'div',
            { className: 'dsh-todo-workspace' },
            h(NoteRail, { notes, activeId, onSelect, onCreate, t, lang }),
            h(
              'div',
              { className: 'dsh-todo-content' },
              activeNote
                ? h(NoteEditor, {
                    key: activeNote.id,
                    note: activeNote,
                    onPatch,
                    onDelete,
                    t,
                    lang,
                  })
                : h(
                    'div',
                    { className: 'dsh-todo-empty' },
                    h(ListMark, { size: 46 }),
                    h('div', { className: 'dsh-todo-empty-title' }, t('noteEmptyTitle')),
                    h('div', { className: 'dsh-todo-empty-hint' }, t('noteEmptyHint')),
                    h(
                      'button',
                      { type: 'button', className: 'dsh-todo-primary', onClick: onCreate },
                      h(PlusIcon),
                      t('newNote'),
                    ),
                  ),
            ),
          );
        }

        function PageTitle({ page, onRename, t }) {
          const [name, setName] = React.useState(page.name);

          React.useEffect(() => {
            setName(page.name);
          }, [page.id, page.name]);

          function commit() {
            const value = name.trim();
            if (!value) {
              setName(page.name);
              return;
            }
            if (value !== page.name) onRename(value);
          }

          return h('input', {
            className: 'dsh-todo-titleinput',
            value: name,
            onChange: (event) => setName(event.target.value),
            onBlur: commit,
            onKeyDown: (event) => {
              if (event.key === 'Enter') {
                event.preventDefault();
                event.currentTarget.blur();
              } else if (event.key === 'Escape') {
                event.stopPropagation();
                setName(page.name);
                event.currentTarget.blur();
              }
            },
            placeholder: t('defaultPageName'),
            'aria-label': t('pageName'),
            spellCheck: false,
          });
        }

        function GroupHeader({ group, count, onRename, onDelete, t }) {
          const [name, setName] = React.useState(group.name);

          React.useEffect(() => {
            setName(group.name);
          }, [group.id, group.name]);

          function commit() {
            const value = name.trim();
            if (value && value !== group.name) {
              onRename(group.id, value);
            } else {
              setName(group.name);
            }
          }

          return h(
            'div',
            { className: 'dsh-todo-group-head' },
            h('input', {
              className: 'dsh-todo-group-name',
              value: name,
              onChange: (event) => setName(event.target.value),
              onBlur: commit,
              onKeyDown: (event) => {
                if (event.key === 'Enter') {
                  event.preventDefault();
                  event.currentTarget.blur();
                } else if (event.key === 'Escape') {
                  event.stopPropagation();
                  setName(group.name);
                  event.currentTarget.blur();
                }
              },
              placeholder: t('groupName'),
              'aria-label': t('groupName'),
              title: t('groupName'),
              spellCheck: false,
            }),
            count > 0 ? h('span', { className: 'dsh-todo-group-count' }, String(count)) : null,
            h(
              'div',
              { className: 'dsh-todo-group-actions' },
              h(
                'button',
                {
                  type: 'button',
                  className: 'dsh-todo-iconbtn',
                  onClick: () => onDelete(group.id),
                  'aria-label': t('deleteGroup'),
                  title: t('deleteGroup'),
                },
                h(TrashIcon),
              ),
            ),
          );
        }

        function ConfirmDialog({ title, message, confirmLabel, onConfirm, onClose, t }) {
          return h(
            'div',
            {
              className: 'dsh-todo-backdrop',
              onMouseDown: (event) => {
                if (event.target === event.currentTarget) onClose();
              },
              onKeyDown: (event) => {
                if (event.key === 'Escape') {
                  event.stopPropagation();
                  onClose();
                }
              },
            },
            h(
              'div',
              { className: 'dsh-todo-dialog', role: 'alertdialog', 'aria-modal': 'true', 'aria-label': title },
              h(
                'div',
                { className: 'dsh-todo-dialog-head' },
                h('h2', { className: 'dsh-todo-dialog-title' }, title),
                h(
                  'button',
                  { type: 'button', className: 'dsh-todo-iconbtn', onClick: onClose, 'aria-label': t('close'), title: t('close') },
                  h(XIcon),
                ),
              ),
              h('p', { className: 'dsh-todo-confirm-text' }, message),
              h(
                'div',
                { className: 'dsh-todo-confirm-actions' },
                h('button', { type: 'button', className: 'dsh-todo-ghost', onClick: onClose, autoFocus: true }, t('cancel')),
                h('button', { type: 'button', className: 'dsh-todo-danger', onClick: onConfirm }, confirmLabel),
              ),
            ),
          );
        }

        function TaskDialog({ task, groups, onClose, t, lang }) {
          const [title, setTitle] = React.useState(task.text);
          const [notes, setNotes] = React.useState(task.notes);
          const [dueDate, setDueDate] = React.useState(task.dueDate || '');
          const [groupId, setGroupId] = React.useState(task.groupId || '');
          const canSave = title.trim().length > 0;

          function save() {
            if (!canSave) return;
            patchTask(task.id, {
              text: title.trim(),
              notes: notes.trim(),
              dueDate: dueDate || null,
              groupId: groupId || null,
            });
            onClose();
          }

          return h(
            'div',
            {
              className: 'dsh-todo-backdrop',
              onMouseDown: (event) => {
                if (event.target === event.currentTarget) onClose();
              },
              onKeyDown: (event) => {
                if (event.key === 'Escape') {
                  event.stopPropagation();
                  onClose();
                }
              },
            },
            h(
              'div',
              { className: 'dsh-todo-dialog', role: 'dialog', 'aria-modal': 'true', 'aria-label': t('editTask') },
              h(
                'div',
                { className: 'dsh-todo-dialog-head' },
                h('h2', { className: 'dsh-todo-dialog-title' }, t('editTask')),
                h(
                  'button',
                  { type: 'button', className: 'dsh-todo-iconbtn', onClick: onClose, 'aria-label': t('close'), title: t('close') },
                  h(XIcon),
                ),
              ),
              h(
                'div',
                { className: 'dsh-todo-field' },
                h('span', { className: 'dsh-todo-label' }, t('titleLabel')),
                h('input', {
                  className: 'dsh-todo-control',
                  value: title,
                  onChange: (event) => setTitle(event.target.value),
                  onKeyDown: (event) => {
                    if (event.key === 'Enter') {
                      event.preventDefault();
                      save();
                    }
                  },
                  'aria-label': t('titleLabel'),
                  autoFocus: true,
                }),
              ),
              h(
                'div',
                { className: 'dsh-todo-field' },
                h('span', { className: 'dsh-todo-label' }, t('detailsLabel')),
                h('textarea', {
                  className: 'dsh-todo-control dsh-todo-textarea',
                  value: notes,
                  onChange: (event) => setNotes(event.target.value),
                  placeholder: t('detailsPlaceholder'),
                  'aria-label': t('detailsLabel'),
                }),
              ),
              h(
                'div',
                { className: 'dsh-todo-field-row' },
                h(
                  'div',
                  { className: 'dsh-todo-field' },
                  h('span', { className: 'dsh-todo-label' }, t('dueDateLabel')),
                  h(
                    'div',
                    { className: 'dsh-todo-daterow' },
                    h(DatePicker, {
                      value: dueDate,
                      onChange: setDueDate,
                      ariaLabel: t('dueDateLabel'),
                      t,
                      lang,
                      menuUp: true,
                    }),
                    dueDate
                      ? h(
                          'button',
                          {
                            type: 'button',
                            className: 'dsh-todo-iconbtn',
                            onClick: () => setDueDate(''),
                            'aria-label': t('clearDate'),
                            title: t('clearDate'),
                          },
                          h(XIcon),
                        )
                      : null,
                  ),
                ),
                h(
                  'div',
                  { className: 'dsh-todo-field' },
                  h('span', { className: 'dsh-todo-label' }, t('groupLabel')),
                  h(
                    SelectMenu,
                    {
                      value: groupId,
                      options: [{ value: '', label: t('groupsInbox') }].concat(
                        groups.map((group) => ({ value: group.id, label: group.name })),
                      ),
                      onChange: setGroupId,
                      ariaLabel: t('groupLabel'),
                      className: 'dsh-todo-control dsh-todo-field-select',
                      menuUp: true,
                    },
                  ),
                ),
              ),
              h(
                'div',
                { className: 'dsh-todo-dialog-actions' },
                h(
                  'button',
                  {
                    type: 'button',
                    className: 'dsh-todo-danger',
                    onClick: () => {
                      removeTask(task.id);
                      onClose();
                    },
                  },
                  h(TrashIcon),
                  t('deleteTask'),
                ),
                h(
                  'div',
                  { className: 'dsh-todo-actions-right' },
                  h('button', { type: 'button', className: 'dsh-todo-ghost', onClick: onClose }, t('cancel')),
                  h(
                    'button',
                    {
                      type: 'button',
                      className: 'dsh-todo-primary',
                      disabled: !canSave,
                      onClick: save,
                    },
                    h(CheckIcon),
                    t('save'),
                  ),
                ),
              ),
            ),
          );
        }

        function Page() {
          useLocaleTick(ctx.locale);
          const dark = useDarkMode();
          const data = useStore();
          const notesData = useNotesStore();
          const pages = data.pages;
          const notes = notesData.notes;
          const lang = ctx.locale.getLocale().active;
          const today = todayKey();

          const [view, setView] = React.useState('tasks');
          const [activeNoteId, setActiveNoteId] = React.useState(null);
          const [activePageId, setActivePageId] = React.useState(() => data.pages[0].id);
          const [draft, setDraft] = React.useState('');
          const [draftDue, setDraftDue] = React.useState('');
          const [groupChoice, setGroupChoice] = React.useState('inbox');
          const [statusFilter, setStatusFilter] = React.useState('all');
          const [dueFilter, setDueFilter] = React.useState('any');
          const [creatingGroup, setCreatingGroup] = React.useState(false);
          const [groupDraft, setGroupDraft] = React.useState('');
          const [editingTaskId, setEditingTaskId] = React.useState(null);
          const [deletingGroupId, setDeletingGroupId] = React.useState(null);
          const [confirmDeletePage, setConfirmDeletePage] = React.useState(false);

          React.useEffect(() => {
            if (!pages.some((page) => page.id === activePageId)) {
              setActivePageId(pages[0].id);
            }
          }, [pages, activePageId]);

          React.useEffect(() => {
            if (notes.length === 0) {
              if (activeNoteId !== null) setActiveNoteId(null);
              return;
            }
            if (!notes.some((note) => note.id === activeNoteId)) {
              setActiveNoteId(notes[0].id);
            }
          }, [notes, activeNoteId]);

          const activePage = pages.find((page) => page.id === activePageId) || pages[0];
          const pageGroups = data.groups.filter((group) => group.pageId === activePage.id);
          const pageTasks = data.tasks.filter((task) => task.pageId === activePage.id);

          React.useEffect(() => {
            setGroupChoice('inbox');
            setCreatingGroup(false);
            setGroupDraft('');
            setEditingTaskId(null);
            setDeletingGroupId(null);
            setConfirmDeletePage(false);
          }, [activePage.id]);

          React.useEffect(() => {
            if (groupChoice !== 'inbox' && !pageGroups.some((group) => group.id === groupChoice)) {
              setGroupChoice('inbox');
            }
          }, [pageGroups, groupChoice]);

          if (view === 'notes') {
            return h(
              'div',
              { className: 'dsh-todo-page', 'data-dark': dark ? 'true' : 'false' },
              h('style', null, CSS),
              h(
                'div',
                { className: 'dsh-todo-shell' },
                h(Masthead, { view, onView: setView, t, lang }),
                h(NotesView, {
                  notes,
                  activeId: activeNoteId,
                  onSelect: setActiveNoteId,
                  onCreate: () => {
                    const id = addNote();
                    setActiveNoteId(id);
                  },
                  onPatch: patchNote,
                  onDelete: removeNote,
                  t,
                  lang,
                }),
              ),
            );
          }

          const stats = new Map();
          for (const page of pages) {
            let open = 0;
            let done = 0;
            for (const task of data.tasks) {
              if (task.pageId !== page.id) continue;
              if (task.done) done += 1;
              else open += 1;
            }
            stats.set(page.id, { open, done, total: open + done });
          }

          const openCount = pageTasks.filter((task) => !task.done).length;
          const doneCount = pageTasks.length - openCount;

          function matchesDue(task) {
            if (dueFilter === 'any') return true;
            if (dueFilter === 'none') return !task.dueDate;
            if (!task.dueDate) return false;
            if (dueFilter === 'today') return task.dueDate === today;
            if (dueFilter === 'tomorrow') return task.dueDate === addDays(today, 1);
            if (dueFilter === 'week') return task.dueDate >= today && task.dueDate <= addDays(today, 6);
            if (dueFilter === 'overdue') return !task.done && task.dueDate < today;
            return true;
          }

          function matchesStatus(task) {
            if (statusFilter === 'all') return true;
            if (statusFilter === 'active') return !task.done;
            return task.done;
          }

          function matches(task) {
            return matchesStatus(task) && matchesDue(task);
          }

          function sortDoneLast(tasks) {
            return [...tasks.filter((task) => !task.done), ...tasks.filter((task) => task.done)];
          }

          const filtersActive = statusFilter !== 'all' || dueFilter !== 'any';
          const progressPercent =
            pageTasks.length === 0 ? 0 : Math.round((doneCount / pageTasks.length) * 100);
          const pageStatsText =
            pageTasks.length === 0
              ? t('pageStatsEmpty')
              : openCount === 0
                ? t('pageStatsDone').replace('{done}', String(doneCount))
                : t('pageStats')
                    .replace('{open}', String(openCount))
                    .replace('{done}', String(doneCount));

          const statuses = [
            ['all', t('filterAll')],
            ['active', t('filterActive')],
            ['completed', t('filterDone')],
          ];
          const dueOptions = [
            ['any', t('dueAny')],
            ['today', t('dueToday')],
            ['tomorrow', t('dueTomorrow')],
            ['week', t('dueWeek')],
            ['overdue', t('dueOverdue')],
            ['none', t('dueNone')],
          ];

          const editingTask = editingTaskId
            ? pageTasks.find((task) => task.id === editingTaskId)
            : null;
          const deletingGroup = deletingGroupId
            ? pageGroups.find((group) => group.id === deletingGroupId)
            : null;
          const deletingGroupTaskCount = deletingGroup
            ? pageTasks.filter((task) => task.groupId === deletingGroup.id).length
            : 0;
          const pageLabel = activePage.name || t('defaultPageName');

          function renderSection(key, header, allTasks) {
            const visible = sortDoneLast(allTasks.filter(matches));
            return h(
              'section',
              { key, className: 'dsh-todo-group' },
              header,
              visible.length === 0
                ? h(
                    'div',
                    { className: 'dsh-todo-group-empty' },
                    allTasks.length === 0 ? t('noTasks') : t('noMatching'),
                  )
                : h(
                    'ul',
                    { className: 'dsh-todo-list' },
                    visible.map((task) =>
                      h(TaskRow, {
                        key: task.id,
                        task,
                        onOpen: () => setEditingTaskId(task.id),
                        onToggle: toggleTask,
                        onRemove: removeTask,
                        t,
                        lang,
                      }),
                    ),
                  ),
            );
          }

          const inboxTasks = pageTasks.filter((task) => !task.groupId);
          const sections = [];
          if (inboxTasks.length > 0 || pageGroups.length === 0) {
            const inboxOpen = inboxTasks.filter((task) => !task.done).length;
            sections.push(
              renderSection(
                'inbox',
                h(
                  'div',
                  { className: 'dsh-todo-group-head' },
                  h('h2', { className: 'dsh-todo-group-label' }, t('groupsInbox')),
                  inboxOpen > 0
                    ? h('span', { className: 'dsh-todo-group-count' }, String(inboxOpen))
                    : null,
                ),
                inboxTasks,
              ),
            );
          }
          for (const group of pageGroups) {
            const groupTasks = pageTasks.filter((task) => task.groupId === group.id);
            const groupOpen = groupTasks.filter((task) => !task.done).length;
            sections.push(
              renderSection(
                group.id,
                h(GroupHeader, {
                  group,
                  count: groupOpen,
                  onRename: renameGroup,
                  onDelete: setDeletingGroupId,
                  t,
                }),
                groupTasks,
              ),
            );
          }

          const pageEmpty = pageTasks.length === 0 && pageGroups.length === 0;

          function submitTask(event) {
            event.preventDefault();
            const value = draft.trim();
            if (!value) return;
            const due = draftDue || null;
            addTask({
              pageId: activePage.id,
              groupId: groupChoice === 'inbox' ? null : groupChoice,
              text: value,
              dueDate: due,
            });
            setDraft('');
            setDraftDue('');
            if (statusFilter === 'completed') setStatusFilter('all');
            if (!matchesDue({ dueDate: due, done: false })) setDueFilter('any');
          }

          function submitGroup(event) {
            event.preventDefault();
            const value = groupDraft.trim();
            if (!value) return;
            addGroup(activePage.id, value);
            setGroupDraft('');
            setCreatingGroup(false);
          }

          return h(
            'div',
            { className: 'dsh-todo-page', 'data-dark': dark ? 'true' : 'false' },
            h('style', null, CSS),
            h(
              'div',
              { className: 'dsh-todo-shell' },
              h(Masthead, { view, onView: setView, t, lang }),
              h(
                'div',
                { className: 'dsh-todo-workspace' },
                h(PageRail, {
                  pages,
                  stats,
                  activeId: activePage.id,
                  onSelect: setActivePageId,
                  onCreate: (name) => {
                    const id = addPage(name);
                    setActivePageId(id);
                  },
                  t,
                }),
                h(
                  'div',
                  { className: 'dsh-todo-content' },
                  h(
                    'header',
                    { className: 'dsh-todo-pagehead' },
                    h(
                      'div',
                      { className: 'dsh-todo-pagehead-main' },
                      h(PageTitle, { page: activePage, onRename: (name) => renamePage(activePage.id, name), t }),
                      h('div', { className: 'dsh-todo-pagestats' }, pageStatsText),
                    ),
                    h(
                      'div',
                      { className: 'dsh-todo-pagehead-tools' },
                      h(
                        'div',
                        { className: 'dsh-todo-seg', role: 'group', 'aria-label': t('filtersLabel') },
                        statuses.map(([id, label]) =>
                          h(
                            'button',
                            {
                              key: id,
                              type: 'button',
                              'aria-pressed': statusFilter === id,
                              onClick: () => setStatusFilter(id),
                            },
                            label,
                          ),
                        ),
                      ),
                      h(
                        SelectMenu,
                        {
                          value: dueFilter,
                          options: dueOptions.map(([value, label]) => ({ value, label })),
                          onChange: setDueFilter,
                          ariaLabel: t('dueFilterLabel'),
                          className: 'dsh-todo-duecontrol',
                          icon: CalendarIcon,
                          active: dueFilter !== 'any',
                        },
                      ),
                      filtersActive
                        ? h(
                            'button',
                            {
                              type: 'button',
                              className: 'dsh-todo-reset',
                              onClick: () => {
                                setStatusFilter('all');
                                setDueFilter('any');
                              },
                            },
                            t('resetFilters'),
                          )
                        : null,
                      h(
                        'button',
                        {
                          type: 'button',
                          className: 'dsh-todo-page-delete',
                          onClick: () => setConfirmDeletePage(true),
                          disabled: pages.length <= 1,
                          'aria-label': t('deletePage'),
                          title: pages.length <= 1 ? t('keepOnePage') : t('deletePage'),
                        },
                        h(TrashIcon),
                      ),
                    ),
                  ),
                  h(
                    'div',
                    pageTasks.length === 0
                      ? { className: 'dsh-todo-progress' }
                      : {
                          className: 'dsh-todo-progress',
                          role: 'progressbar',
                          'aria-label': t('progressLabel'),
                          'aria-valuemin': 0,
                          'aria-valuemax': 100,
                          'aria-valuenow': progressPercent,
                        },
                    h('span', { style: { width: progressPercent + '%' } }),
                  ),
                  h(
                    'form',
                    { className: 'dsh-todo-composer', onSubmit: submitTask },
                    h('input', {
                      className: 'dsh-todo-composer-text',
                      value: draft,
                      onChange: (event) => setDraft(event.target.value),
                      onKeyDown: (event) => {
                        if (event.key === 'Escape') setDraft('');
                      },
                      placeholder: t('placeholder'),
                      'aria-label': t('placeholder'),
                      autoComplete: 'off',
                      spellCheck: false,
                    }),
                    h(
                      'span',
                      { className: 'dsh-todo-composer-field' },
                      h(SelectMenu, {
                        value: groupChoice,
                        options: [{ value: 'inbox', label: t('groupsInbox') }].concat(
                          pageGroups.map((group) => ({ value: group.id, label: group.name })),
                        ),
                        onChange: setGroupChoice,
                        ariaLabel: t('groupLabel'),
                        className: 'dsh-todo-bare-select',
                      }),
                    ),
                    h(
                      'span',
                      { className: 'dsh-todo-composer-field' },
                      h(DatePicker, {
                        value: draftDue,
                        onChange: setDraftDue,
                        ariaLabel: t('dueDateLabel'),
                        t,
                        lang,
                      }),
                    ),
                    h(
                      'button',
                      { type: 'submit', className: 'dsh-todo-composer-add', disabled: !draft.trim() },
                      h(PlusIcon),
                      t('add'),
                    ),
                  ),
                  pageEmpty
                    ? h(
                        'div',
                        { className: 'dsh-todo-empty' },
                        h(ListMark, { size: 46 }),
                        h('div', { className: 'dsh-todo-empty-title' }, t('emptyTitle')),
                        h('div', { className: 'dsh-todo-empty-hint' }, t('emptyHint')),
                      )
                    : h('div', { className: 'dsh-todo-groups' }, sections),
                  h(
                    'div',
                    { className: 'dsh-todo-listfoot' },
                    creatingGroup
                      ? h(
                          'form',
                          { className: 'dsh-todo-groupform', onSubmit: submitGroup },
                          h('input', {
                            value: groupDraft,
                            onChange: (event) => setGroupDraft(event.target.value),
                            onKeyDown: (event) => {
                              if (event.key === 'Escape') {
                                event.stopPropagation();
                                setCreatingGroup(false);
                                setGroupDraft('');
                              }
                            },
                            placeholder: t('groupName'),
                            'aria-label': t('groupName'),
                            autoFocus: true,
                            autoComplete: 'off',
                          }),
                          h(
                            'button',
                            { type: 'submit', className: 'dsh-todo-primary', disabled: !groupDraft.trim() },
                            h(PlusIcon),
                            t('createGroup'),
                          ),
                          h(
                            'button',
                            {
                              type: 'button',
                              className: 'dsh-todo-ghost',
                              onClick: () => {
                                setCreatingGroup(false);
                                setGroupDraft('');
                              },
                            },
                            t('cancel'),
                          ),
                        )
                      : h(
                          'button',
                          { type: 'button', className: 'dsh-todo-newgroup', onClick: () => setCreatingGroup(true) },
                          h(PlusIcon, { size: 13 }),
                          t('newGroup'),
                        ),
                    doneCount > 0
                      ? h(
                          'button',
                          {
                            type: 'button',
                            className: 'dsh-todo-clear',
                            onClick: () => clearCompleted(activePage.id),
                          },
                          t('clearCompleted'),
                        )
                      : null,
                  ),
                ),
              ),
            ),
            editingTask
              ? h(TaskDialog, {
                  key: editingTask.id,
                  task: editingTask,
                  groups: pageGroups,
                  onClose: () => setEditingTaskId(null),
                  t,
                  lang,
                })
              : null,
            deletingGroup
              ? h(ConfirmDialog, {
                  title: t('deleteGroup'),
                  message:
                    deletingGroupTaskCount > 0
                      ? t('deleteGroupWarning')
                          .replace('{name}', deletingGroup.name)
                          .replace('{n}', String(deletingGroupTaskCount))
                      : t('deleteGroupWarningNoTasks').replace('{name}', deletingGroup.name),
                  confirmLabel: t('deleteGroup'),
                  onConfirm: () => {
                    deleteGroup(deletingGroup.id);
                    setDeletingGroupId(null);
                  },
                  onClose: () => setDeletingGroupId(null),
                  t,
                })
              : null,
            confirmDeletePage
              ? h(ConfirmDialog, {
                  title: t('deletePage'),
                  message:
                    pageTasks.length > 0
                      ? t('deletePageWarning')
                          .replace('{name}', pageLabel)
                          .replace('{n}', String(pageTasks.length))
                      : t('deletePageWarningNoTasks').replace('{name}', pageLabel),
                  confirmLabel: t('deletePage'),
                  onConfirm: () => {
                    deletePage(activePage.id);
                    setConfirmDeletePage(false);
                  },
                  onClose: () => setConfirmDeletePage(false),
                  t,
                })
              : null,
          );
        }

        ctx.slots.inject('sidebar.panellist', () =>
          ctx.slots.register(
            {
              name: 'sidebar.panellist',
              id: 'todo',
              order: 20,
              label: 'To Do',
            },
            TodoIcon,
          ),
        );

        ctx.slots.inject('main', () =>
          ctx.slots.register(
            {
              name: 'main',
              key: 'todo',
            },
            Page,
          ),
        );
      },
    };
  },
});
