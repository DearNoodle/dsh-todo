window.__ModuleLoader__.load({
  id: 'dsh-todo',
  factory(require) {
    const React = require('react');
    const h = React.createElement;

    const NS = 'dsh-todo';
    const STORAGE_KEY = 'dsh-todo:v2';
    const LEGACY_KEY = 'dsh-todo:v1';

    const EN = {
      title: 'To Do',
      placeholder: 'Add a task…',
      addToPlaceholder: 'Add a task to {group}…',
      add: 'Add',
      filterAll: 'All',
      filterActive: 'Unfinished',
      filterDone: 'Done',
      dueFilterLabel: 'Filter by due date',
      dueAny: 'Any date',
      dueToday: 'Today',
      dueTomorrow: 'Tomorrow',
      dueWeek: 'Next 7 days',
      dueOverdue: 'Overdue',
      dueNone: 'No date',
      clearCompleted: 'Clear completed',
      groupsAll: 'All',
      groupsInbox: 'Inbox',
      manageGroups: 'Manage',
      emptyTitle: 'No tasks yet',
      emptyHint: 'Add your first task above.',
      nothingHere: 'Nothing in this view.',
      groupEmptyHint: 'Add a task to this group above.',
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
      newGroup: 'New group',
      newGroupPlaceholder: 'Group name',
      createGroup: 'Create',
      deleteGroup: 'Delete group',
      deleteGroupWarning: 'Delete “{name}”? {n} tasks will move to Inbox.',
      deleteGroupWarningNoTasks: 'Delete “{name}”?',
      groupsEmpty: 'No groups yet.',
      openTask: 'Open task details',
      itemsLeft: '{n} unfinished',
      markDone: 'Mark as done',
      markActive: 'Mark as unfinished',
      taskCount: '{n} tasks',
    };

    const ZH = {
      title: '待辦清單',
      placeholder: '新增一件事…',
      addToPlaceholder: '新增到「{group}」…',
      add: '新增',
      filterAll: '全部',
      filterActive: '未完成',
      filterDone: '已完成',
      dueFilterLabel: '依到期日篩選',
      dueAny: '任何日期',
      dueToday: '今天',
      dueTomorrow: '明天',
      dueWeek: '未來 7 天',
      dueOverdue: '已逾期',
      dueNone: '無日期',
      clearCompleted: '清除已完成',
      groupsAll: '全部',
      groupsInbox: '未分組',
      manageGroups: '管理',
      emptyTitle: '還沒有待辦事項',
      emptyHint: '從上面新增第一件事吧。',
      nothingHere: '這個檢視沒有項目。',
      groupEmptyHint: '在上面新增此群組的第一件事吧。',
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
      newGroup: '新增群組',
      newGroupPlaceholder: '群組名稱',
      createGroup: '建立',
      deleteGroup: '刪除群組',
      deleteGroupWarning: '刪除「{name}」？{n} 項任務會移到未分組。',
      deleteGroupWarningNoTasks: '刪除「{name}」？',
      groupsEmpty: '還沒有群組。',
      openTask: '開啟任務詳細內容',
      itemsLeft: '尚餘 {n} 項未完成',
      markDone: '標記為完成',
      markActive: '標記為未完成',
      taskCount: '{n} 項任務',
    };

    const CSS = `
.dsh-todo-page {
  height: 100%;
  overflow-y: auto;
  background: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-primary);
}
.dsh-todo-page * { box-sizing: border-box; }
.dsh-todo-shell {
  max-width: 760px;
  margin: 0 auto;
  padding: 40px 24px 96px;
}
.dsh-todo-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 22px;
}
.dsh-todo-title {
  margin: 0;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -0.01em;
}
.dsh-todo-count {
  color: var(--dsw-alias-label-secondary);
  font-size: 12px;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.dsh-todo-add {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 14px;
}
.dsh-todo-input,
.dsh-todo-date,
.dsh-todo-control {
  height: 40px;
  padding: 0 12px;
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 9px;
  background: var(--dsw-alias-bg-layer-1);
  color: var(--dsw-alias-label-primary);
  font: inherit;
  font-size: 14px;
  outline: none;
}
.dsh-todo-input { flex: 1 1 240px; min-width: 0; }
.dsh-todo-date { flex: none; width: 142px; font-size: 12px; }
.dsh-todo-input::placeholder { color: var(--dsw-alias-label-secondary); }
.dsh-todo-input:focus,
.dsh-todo-date:focus,
.dsh-todo-control:focus {
  border-color: var(--dsw-alias-brand-primary);
  box-shadow: 0 0 0 1px var(--dsw-alias-brand-primary);
}
.dsh-todo-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 40px;
  padding: 0 14px;
  border: 0;
  border-radius: 9px;
  background: var(--dsw-alias-brand-primary);
  color: #fff;
  font: inherit;
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
}
.dsh-todo-primary:disabled { opacity: 0.45; cursor: default; }
.dsh-todo-small { height: 34px; padding: 0 12px; border-radius: 8px; font-size: 12px; }
.dsh-todo-ghost {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 34px;
  padding: 0 12px;
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 8px;
  background: transparent;
  color: var(--dsw-alias-label-primary);
  font: inherit;
  font-size: 12px;
  cursor: pointer;
}
.dsh-todo-ghost:hover { background: var(--dsw-alias-bg-layer-2); }
.dsh-todo-danger {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 34px;
  padding: 0 10px;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: var(--dsw-alias-state-error-primary);
  font: inherit;
  font-size: 12px;
  cursor: pointer;
}
.dsh-todo-danger:hover { background: var(--dsw-alias-bg-layer-2); }
.dsh-todo-iconbtn {
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  padding: 0;
  border: 0;
  border-radius: 7px;
  background: transparent;
  color: var(--dsw-alias-label-secondary);
  cursor: pointer;
}
.dsh-todo-iconbtn:hover {
  background: var(--dsw-alias-bg-layer-2);
  color: var(--dsw-alias-label-primary);
}
.dsh-todo-primary:focus-visible,
.dsh-todo-ghost:focus-visible,
.dsh-todo-danger:focus-visible,
.dsh-todo-iconbtn:focus-visible,
.dsh-todo-chip:focus-visible,
.dsh-todo-filter:focus-visible,
.dsh-todo-clear:focus-visible,
.dsh-todo-text:focus-visible,
.dsh-todo-group-input:focus-visible,
.dsh-todo-duefilter:focus-within {
  outline: 2px solid var(--dsw-alias-brand-primary);
  outline-offset: 2px;
}
.dsh-todo-groups {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  margin-bottom: 12px;
}
.dsh-todo-chip {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  height: 28px;
  padding: 0 10px;
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 999px;
  background: var(--dsw-alias-bg-layer-1);
  color: var(--dsw-alias-label-secondary);
  font: inherit;
  font-size: 12px;
  cursor: pointer;
}
.dsh-todo-chip:hover {
  color: var(--dsw-alias-label-primary);
  border-color: var(--dsw-alias-border-l2);
}
.dsh-todo-chip[data-active="true"] {
  color: var(--dsw-alias-label-primary);
  background: var(--dsw-alias-bg-layer-2);
  border-color: var(--dsw-alias-border-l2);
  font-weight: 500;
}
.dsh-todo-chip-count { font-variant-numeric: tabular-nums; opacity: 0.65; }
.dsh-todo-manage { margin-left: auto; }
.dsh-todo-toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 12px;
}
.dsh-todo-filters {
  display: inline-flex;
  gap: 2px;
  padding: 3px;
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 9px;
  background: var(--dsw-alias-bg-layer-1);
}
.dsh-todo-filter {
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--dsw-alias-label-secondary);
  font: inherit;
  font-size: 12px;
  padding: 4px 10px;
  cursor: pointer;
}
.dsh-todo-filter[aria-pressed="true"] {
  background: var(--dsw-alias-bg-layer-2);
  color: var(--dsw-alias-label-primary);
}
.dsh-todo-toolbar-right { display: flex; align-items: center; gap: 8px; }
.dsh-todo-duefilter {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 30px;
  padding: 0 8px;
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 8px;
  background: var(--dsw-alias-bg-layer-1);
  color: var(--dsw-alias-label-secondary);
}
.dsh-todo-duefilter select {
  border: 0;
  background: transparent;
  color: var(--dsw-alias-label-primary);
  font: inherit;
  font-size: 12px;
  outline: none;
  cursor: pointer;
  max-width: 130px;
}
.dsh-todo-clear {
  border: 0;
  background: transparent;
  color: var(--dsw-alias-label-secondary);
  font: inherit;
  font-size: 12px;
  padding: 6px 4px;
  cursor: pointer;
}
.dsh-todo-clear:hover { color: var(--dsw-alias-label-primary); }
.dsh-todo-list {
  list-style: none;
  margin: 0;
  padding: 0;
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 12px;
  overflow: hidden;
  background: var(--dsw-alias-bg-layer-1);
}
.dsh-todo-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border-top: 1px solid var(--dsw-alias-border-l1);
}
.dsh-todo-row:first-child { border-top: 0; }
.dsh-todo-row:hover { background: var(--dsw-alias-bg-layer-2); }
.dsh-todo-check {
  flex: none;
  width: 17px;
  height: 17px;
  margin: 0;
  accent-color: var(--dsw-alias-brand-primary);
  cursor: pointer;
}
.dsh-todo-text {
  flex: 1;
  min-width: 0;
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 14px;
  line-height: 1.45;
  text-align: left;
  overflow-wrap: anywhere;
  cursor: pointer;
}
.dsh-todo-text:hover { color: var(--dsw-alias-brand-primary); }
.dsh-todo-row[data-done="true"] .dsh-todo-text {
  color: var(--dsw-alias-label-secondary);
  text-decoration: line-through;
  text-decoration-color: var(--dsw-alias-border-l2);
}
.dsh-todo-row[data-done="true"] .dsh-todo-text:hover {
  color: var(--dsw-alias-label-primary);
}
.dsh-todo-group-tag {
  flex: none;
  max-width: 110px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 2px 7px;
  border-radius: 999px;
  background: var(--dsw-alias-bg-layer-2);
  color: var(--dsw-alias-label-secondary);
  font-size: 11px;
}
.dsh-todo-note {
  flex: none;
  display: grid;
  place-items: center;
  color: var(--dsw-alias-label-secondary);
}
.dsh-todo-due {
  flex: none;
  padding: 2px 7px;
  border-radius: 999px;
  background: var(--dsw-alias-bg-layer-2);
  color: var(--dsw-alias-label-secondary);
  font-size: 11px;
  white-space: nowrap;
}
.dsh-todo-due[data-state="overdue"] { color: var(--dsw-alias-state-error-primary); }
.dsh-todo-due[data-state="today"] { color: var(--dsw-alias-brand-primary); }
.dsh-todo-row[data-done="true"] .dsh-todo-due { color: var(--dsw-alias-label-secondary); }
.dsh-todo-delete {
  flex: none;
  display: grid;
  place-items: center;
  width: 26px;
  height: 26px;
  padding: 0;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--dsw-alias-label-secondary);
  cursor: pointer;
  opacity: 0;
  transition: opacity 120ms ease;
}
.dsh-todo-row:hover .dsh-todo-delete,
.dsh-todo-delete:focus-visible { opacity: 1; }
.dsh-todo-delete:hover {
  background: var(--dsw-alias-bg-layer-1);
  color: var(--dsw-alias-state-error-primary);
}
@media (hover: none) {
  .dsh-todo-delete { opacity: 1; }
}
.dsh-todo-empty {
  padding: 56px 24px;
  border: 1px dashed var(--dsw-alias-border-l1);
  border-radius: 12px;
  text-align: center;
}
.dsh-todo-empty-title { font-size: 14px; font-weight: 500; }
.dsh-todo-empty-hint {
  margin-top: 6px;
  color: var(--dsw-alias-label-secondary);
  font-size: 13px;
}
.dsh-todo-backdrop {
  position: fixed;
  inset: 0;
  z-index: 120;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgb(0 0 0 / 38%);
}
.dsh-todo-dialog {
  width: min(520px, 100%);
  max-height: calc(100vh - 48px);
  overflow: auto;
  padding: 18px;
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 14px;
  background: var(--dsw-alias-bg-overlay);
  box-shadow: 0 24px 64px rgb(0 0 0 / 32%);
}
.dsh-todo-dialog-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
}
.dsh-todo-dialog-title { margin: 0; font-size: 16px; font-weight: 600; }
.dsh-todo-field { display: flex; flex-direction: column; gap: 6px; margin-bottom: 14px; }
.dsh-todo-label { font-size: 12px; color: var(--dsw-alias-label-secondary); }
.dsh-todo-control { width: 100%; height: 36px; font-size: 13px; }
.dsh-todo-textarea {
  min-height: 110px;
  padding: 9px 10px;
  resize: vertical;
  line-height: 1.5;
}
.dsh-todo-daterow { display: flex; align-items: center; gap: 8px; }
.dsh-todo-daterow .dsh-todo-control { flex: 1; }
.dsh-todo-dialog-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: 4px;
}
.dsh-todo-actions-right { display: flex; align-items: center; gap: 8px; }
.dsh-todo-group-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 12px;
  max-height: 300px;
  overflow: auto;
}
.dsh-todo-group-row { display: flex; align-items: center; gap: 8px; }
.dsh-todo-group-input {
  flex: 1;
  min-width: 0;
  height: 34px;
  padding: 0 10px;
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 8px;
  background: var(--dsw-alias-bg-layer-1);
  color: var(--dsw-alias-label-primary);
  font: inherit;
  font-size: 13px;
  outline: none;
}
.dsh-todo-group-input:focus {
  border-color: var(--dsw-alias-brand-primary);
  box-shadow: 0 0 0 1px var(--dsw-alias-brand-primary);
}
.dsh-todo-group-count {
  flex: none;
  color: var(--dsw-alias-label-secondary);
  font-size: 11px;
  font-variant-numeric: tabular-nums;
}
.dsh-todo-group-confirm {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px;
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 8px;
}
.dsh-todo-group-confirm-text {
  color: var(--dsw-alias-label-secondary);
  font-size: 12px;
  line-height: 1.5;
}
.dsh-todo-group-confirm-actions { display: flex; justify-content: flex-end; gap: 6px; }
.dsh-todo-group-empty {
  padding: 18px 0;
  color: var(--dsw-alias-label-secondary);
  font-size: 12px;
}
@media (max-width: 560px) {
  .dsh-todo-shell { padding: 28px 16px 72px; }
  .dsh-todo-input { flex: 1 1 100%; }
  .dsh-todo-date { flex: 1; width: auto; }
  .dsh-todo-addbtn { flex: 0 0 auto; }
}
`;

    let store = { groups: [], tasks: [] };
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

    function sanitize(raw) {
      const groups = [];
      if (Array.isArray(raw && raw.groups)) {
        const seen = new Set();
        for (const group of raw.groups) {
          if (!group || typeof group.id !== 'string' || !group.id) continue;
          if (seen.has(group.id)) continue;
          seen.add(group.id);
          groups.push({ id: group.id, name: typeof group.name === 'string' && group.name.trim() ? group.name.trim() : 'Group' });
        }
      }
      const groupIds = new Set(groups.map((group) => group.id));
      const tasks = [];
      if (Array.isArray(raw && raw.tasks)) {
        for (const task of raw.tasks) {
          if (!task || typeof task.text !== 'string' || !task.text.trim()) continue;
          tasks.push({
            id: typeof task.id === 'string' && task.id ? task.id : newId(),
            text: task.text,
            notes: typeof task.notes === 'string' ? task.notes : '',
            done: task.done === true,
            createdAt: Number.isFinite(task.createdAt) ? task.createdAt : 0,
            dueDate: typeof task.dueDate === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(task.dueDate) ? task.dueDate : null,
            groupId: typeof task.groupId === 'string' && groupIds.has(task.groupId) ? task.groupId : null,
          });
        }
      }
      return { groups, tasks };
    }

    function loadStore() {
      try {
        const rawV2 = window.localStorage.getItem(STORAGE_KEY);
        if (rawV2) return sanitize(JSON.parse(rawV2));
        const rawV1 = window.localStorage.getItem(LEGACY_KEY);
        if (rawV1) {
          const legacy = JSON.parse(rawV1);
          if (Array.isArray(legacy)) {
            return sanitize({
              groups: [],
              tasks: legacy.map((item, index) => ({
                id: item && typeof item.id === 'string' ? item.id : 'todo-legacy-' + index,
                text: item && typeof item.text === 'string' ? item.text : '',
                notes: '',
                done: Boolean(item && item.done),
                createdAt: item && Number.isFinite(item.createdAt) ? item.createdAt : 0,
                dueDate: null,
                groupId: null,
              })),
            });
          }
        }
      } catch {
        // A corrupt store falls back to an empty list.
      }
      return { groups: [], tasks: [] };
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

    function addTask({ text, dueDate, groupId }) {
      const value = text.trim();
      if (!value) return;
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
            groupId: groupId || null,
          },
          ...store.tasks,
        ],
      });
    }

    function patchTask(id, patch) {
      commit({
        ...store,
        tasks: store.tasks.map((task) => (task.id === id ? { ...task, ...patch } : task)),
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

    function addGroup(name) {
      const value = name.trim();
      if (!value) return;
      commit({ ...store, groups: [...store.groups, { id: newId(), name: value }] });
    }

    function renameGroup(id, name) {
      const value = name.trim();
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

    function clearCompleted(shouldClear) {
      commit({
        ...store,
        tasks: store.tasks.filter((task) => !(task.done && shouldClear(task))),
      });
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

    function useLocaleTick(locale) {
      const [, force] = React.useState(0);
      React.useEffect(
        () => locale.subscribe(() => force((n) => n + 1)),
        [locale],
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

    function PencilIcon({ size = 13 }) {
      return h(
        'svg',
        { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true' },
        h('path', { d: 'M4 20h4L18.5 9.5a2.8 2.8 0 0 0-4-4L4 16v4z' }),
        h('path', { d: 'M13.5 6.5l4 4' }),
      );
    }

    function NoteIcon({ size = 13 }) {
      return h(
        'svg',
        { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', 'aria-hidden': 'true' },
        h('path', { d: 'M5 7h14M5 12h14M5 17h9' }),
      );
    }

    function CalendarIcon({ size = 13 }) {
      return h(
        'svg',
        { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true' },
        h('rect', { x: 3.5, y: 5, width: 17, height: 15, rx: 2.5 }),
        h('path', { d: 'M8 3.5v3M16 3.5v3M3.5 10h17' }),
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

    function TaskRow({ task, groupName, onOpen, onToggle, onRemove, t, lang }) {
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
        h('input', {
          type: 'checkbox',
          className: 'dsh-todo-check',
          checked: task.done,
          onClick: (event) => event.stopPropagation(),
          onChange: () => onToggle(task.id),
          'aria-label': task.done ? t('markActive') : t('markDone'),
        }),
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
        groupName ? h('span', { className: 'dsh-todo-group-tag' }, groupName) : null,
        task.notes.trim()
          ? h('span', { className: 'dsh-todo-note', title: t('hasDetails'), 'aria-label': t('hasDetails') }, h(NoteIcon))
          : null,
        task.dueDate ? h('span', { className: 'dsh-todo-due', 'data-state': state, title: task.dueDate }, dueText) : null,
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

    return {
      inject: ['slots', 'locale'],
      apply(ctx) {
        store = loadStore();
        saveStore();
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
            if (event.key !== null && event.key !== STORAGE_KEY) return;
            store = loadStore();
            emit();
          };
          window.addEventListener('storage', onStorage);
          return () => window.removeEventListener('storage', onStorage);
        }, 'dsh-todo: cross-tab sync');

        function TaskDialog({ task, groups, onClose }) {
          useLocaleTick(ctx.locale);
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
                { className: 'dsh-todo-field' },
                h('span', { className: 'dsh-todo-label' }, t('dueDateLabel')),
                h(
                  'div',
                  { className: 'dsh-todo-daterow' },
                  h('input', {
                    type: 'date',
                    className: 'dsh-todo-control',
                    value: dueDate,
                    onChange: (event) => setDueDate(event.target.value),
                    'aria-label': t('dueDateLabel'),
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
                  'select',
                  {
                    className: 'dsh-todo-control',
                    value: groupId,
                    onChange: (event) => setGroupId(event.target.value),
                    'aria-label': t('groupLabel'),
                  },
                  h('option', { value: '' }, t('groupsInbox')),
                  groups.map((group) => h('option', { key: group.id, value: group.id }, group.name)),
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
                    { type: 'button', className: 'dsh-todo-primary dsh-todo-small', disabled: !canSave, onClick: save },
                    h(CheckIcon),
                    t('save'),
                  ),
                ),
              ),
            ),
          );
        }

        function GroupRow({ group, taskCount, onDelete }) {
          const [name, setName] = React.useState(group.name);

          React.useEffect(() => {
            setName(group.name);
          }, [group.name]);

          function commitName() {
            const value = name.trim();
            if (value && value !== group.name) {
              renameGroup(group.id, value);
            } else {
              setName(group.name);
            }
          }

          return h(
            'div',
            { className: 'dsh-todo-group-row' },
            h('input', {
              className: 'dsh-todo-group-input',
              value: name,
              onChange: (event) => setName(event.target.value),
              onBlur: commitName,
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
              'aria-label': t('groupLabel'),
            }),
            h('span', { className: 'dsh-todo-group-count' }, t('taskCount').replace('{n}', String(taskCount))),
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
          );
        }

        function GroupDialog({ onClose }) {
          useLocaleTick(ctx.locale);
          const data = useStore();
          const [draft, setDraft] = React.useState('');
          const [confirmingId, setConfirmingId] = React.useState(null);

          function create() {
            const value = draft.trim();
            if (!value) return;
            addGroup(value);
            setDraft('');
          }

          function countFor(id) {
            return data.tasks.filter((task) => task.groupId === id).length;
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
              { className: 'dsh-todo-dialog', role: 'dialog', 'aria-modal': 'true', 'aria-label': t('manageGroups') },
              h(
                'div',
                { className: 'dsh-todo-dialog-head' },
                h('h2', { className: 'dsh-todo-dialog-title' }, t('manageGroups')),
                h(
                  'button',
                  { type: 'button', className: 'dsh-todo-iconbtn', onClick: onClose, 'aria-label': t('close'), title: t('close') },
                  h(XIcon),
                ),
              ),
              h(
                'div',
                { className: 'dsh-todo-add', style: { marginBottom: 0 } },
                h('input', {
                  className: 'dsh-todo-input',
                  value: draft,
                  onChange: (event) => setDraft(event.target.value),
                  onKeyDown: (event) => {
                    if (event.key === 'Enter') {
                      event.preventDefault();
                      create();
                    }
                  },
                  placeholder: t('newGroupPlaceholder'),
                  'aria-label': t('newGroupPlaceholder'),
                  autoComplete: 'off',
                }),
                h(
                  'button',
                  { type: 'button', className: 'dsh-todo-primary', disabled: !draft.trim(), onClick: create },
                  h(PlusIcon),
                  t('createGroup'),
                ),
              ),
              data.groups.length === 0
                ? h('div', { className: 'dsh-todo-group-empty' }, t('groupsEmpty'))
                : h(
                    'div',
                    { className: 'dsh-todo-group-list' },
                    data.groups.map((group) =>
                      confirmingId === group.id
                        ? h(
                            'div',
                            { key: group.id, className: 'dsh-todo-group-confirm' },
                            h(
                              'div',
                              { className: 'dsh-todo-group-confirm-text' },
                              countFor(group.id) > 0
                                ? t('deleteGroupWarning')
                                    .replace('{name}', group.name)
                                    .replace('{n}', String(countFor(group.id)))
                                : t('deleteGroupWarningNoTasks').replace('{name}', group.name),
                            ),
                            h(
                              'div',
                              { className: 'dsh-todo-group-confirm-actions' },
                              h(
                                'button',
                                { type: 'button', className: 'dsh-todo-ghost', onClick: () => setConfirmingId(null) },
                                t('cancel'),
                              ),
                              h(
                                'button',
                                {
                                  type: 'button',
                                  className: 'dsh-todo-danger',
                                  onClick: () => {
                                    deleteGroup(group.id);
                                    setConfirmingId(null);
                                  },
                                },
                                t('deleteGroup'),
                              ),
                            ),
                          )
                        : h(GroupRow, {
                            key: group.id,
                            group,
                            taskCount: countFor(group.id),
                            onDelete: setConfirmingId,
                          }),
                    ),
                  ),
            ),
          );
        }

        function Page() {
          useLocaleTick(ctx.locale);
          const data = useStore();
          const tasks = data.tasks;
          const groups = data.groups;
          const lang = ctx.locale.getLocale().active;

          const [draft, setDraft] = React.useState('');
          const [draftDue, setDraftDue] = React.useState('');
          const [statusFilter, setStatusFilter] = React.useState('all');
          const [dueFilter, setDueFilter] = React.useState('any');
          const [groupFilter, setGroupFilter] = React.useState('all');
          const [editingId, setEditingId] = React.useState(null);
          const [managing, setManaging] = React.useState(false);

          React.useEffect(() => {
            if (
              groupFilter !== 'all' &&
              groupFilter !== 'inbox' &&
              !groups.some((group) => group.id === groupFilter)
            ) {
              setGroupFilter('all');
            }
          }, [groups, groupFilter]);

          const groupMap = new Map(groups.map((group) => [group.id, group.name]));
          const inGroup = (task) =>
            groupFilter === 'all'
              ? true
              : groupFilter === 'inbox'
                ? !task.groupId
                : task.groupId === groupFilter;
          const scoped = tasks.filter(inGroup);
          const activeCount = scoped.filter((task) => !task.done).length;
          const doneCount = scoped.length - activeCount;
          const today = todayKey();

          const visible = scoped
            .filter((task) =>
              statusFilter === 'all' ? true : statusFilter === 'active' ? !task.done : task.done,
            )
            .filter((task) => {
              if (dueFilter === 'any') return true;
              if (dueFilter === 'none') return !task.dueDate;
              if (!task.dueDate) return false;
              if (dueFilter === 'today') return task.dueDate === today;
              if (dueFilter === 'tomorrow') return task.dueDate === addDays(today, 1);
              if (dueFilter === 'week') return task.dueDate >= today && task.dueDate <= addDays(today, 6);
              if (dueFilter === 'overdue') return task.dueDate < today;
              return true;
            });

          const addGroupId =
            groupFilter !== 'all' && groupFilter !== 'inbox' ? groupFilter : null;
          const addGroupName = addGroupId ? groupMap.get(addGroupId) : null;
          const editingTask = editingId ? tasks.find((task) => task.id === editingId) : null;

          function countForGroup(id) {
            return tasks.filter((task) => {
              if (task.done) return false;
              if (id === 'all') return true;
              if (id === 'inbox') return !task.groupId;
              return task.groupId === id;
            }).length;
          }

          function chip(id, label) {
            const count = countForGroup(id);
            return h(
              'button',
              {
                key: id,
                type: 'button',
                className: 'dsh-todo-chip',
                'data-active': groupFilter === id,
                onClick: () => setGroupFilter(id),
              },
              label,
              count > 0 ? h('span', { className: 'dsh-todo-chip-count' }, String(count)) : null,
            );
          }

          const addForm = h(
            'form',
            {
              className: 'dsh-todo-add',
              onSubmit: (event) => {
                event.preventDefault();
                addTask({ text: draft, dueDate: draftDue, groupId: addGroupId });
                setDraft('');
                setDraftDue('');
              },
            },
            h('input', {
              className: 'dsh-todo-input',
              value: draft,
              onChange: (event) => setDraft(event.target.value),
              onKeyDown: (event) => {
                if (event.key === 'Escape') setDraft('');
              },
              placeholder: addGroupName
                ? t('addToPlaceholder').replace('{group}', addGroupName)
                : t('placeholder'),
              'aria-label': t('placeholder'),
              autoComplete: 'off',
              spellCheck: false,
            }),
            h('input', {
              type: 'date',
              className: 'dsh-todo-date',
              value: draftDue,
              onChange: (event) => setDraftDue(event.target.value),
              'aria-label': t('dueDateLabel'),
            }),
            h(
              'button',
              { className: 'dsh-todo-primary dsh-todo-addbtn', type: 'submit', disabled: !draft.trim() },
              h(PlusIcon),
              t('add'),
            ),
          );

          const groupsBar = h(
            'div',
            { className: 'dsh-todo-groups' },
            chip('all', t('groupsAll')),
            chip('inbox', t('groupsInbox')),
            groups.map((group) => chip(group.id, group.name)),
            h(
              'button',
              { type: 'button', className: 'dsh-todo-chip dsh-todo-manage', onClick: () => setManaging(true) },
              h(PencilIcon),
              t('manageGroups'),
            ),
          );

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

          const toolbar =
            tasks.length > 0
              ? h(
                  'div',
                  { className: 'dsh-todo-toolbar' },
                  h(
                    'div',
                    { className: 'dsh-todo-filters', role: 'group', 'aria-label': t('filterAll') },
                    statuses.map(([id, label]) =>
                      h(
                        'button',
                        {
                          key: id,
                          type: 'button',
                          className: 'dsh-todo-filter',
                          'aria-pressed': statusFilter === id,
                          onClick: () => setStatusFilter(id),
                        },
                        label,
                      ),
                    ),
                  ),
                  h(
                    'div',
                    { className: 'dsh-todo-toolbar-right' },
                    h(
                      'span',
                      { className: 'dsh-todo-duefilter' },
                      h(CalendarIcon),
                      h(
                        'select',
                        {
                          value: dueFilter,
                          onChange: (event) => setDueFilter(event.target.value),
                          'aria-label': t('dueFilterLabel'),
                        },
                        dueOptions.map(([id, label]) => h('option', { key: id, value: id }, label)),
                      ),
                    ),
                    doneCount > 0
                      ? h(
                          'button',
                          {
                            type: 'button',
                            className: 'dsh-todo-clear',
                            onClick: () =>
                              clearCompleted((task) =>
                                groupFilter === 'all'
                                  ? true
                                  : groupFilter === 'inbox'
                                    ? !task.groupId
                                    : task.groupId === groupFilter,
                              ),
                          },
                          t('clearCompleted'),
                        )
                      : null,
                  ),
                )
              : null;

          const emptyState =
            visible.length === 0
              ? h(
                  'div',
                  { className: 'dsh-todo-empty' },
                  h(
                    'div',
                    { className: 'dsh-todo-empty-title' },
                    tasks.length === 0 ? t('emptyTitle') : t('nothingHere'),
                  ),
                  tasks.length === 0
                    ? h('div', { className: 'dsh-todo-empty-hint' }, t('emptyHint'))
                    : groupFilter !== 'all' && scoped.length === 0
                      ? h('div', { className: 'dsh-todo-empty-hint' }, t('groupEmptyHint'))
                      : null,
                )
              : null;

          const listNode =
            visible.length === 0
              ? emptyState
              : h(
                  'ul',
                  { className: 'dsh-todo-list' },
                  visible.map((task) =>
                    h(TaskRow, {
                      key: task.id,
                      task,
                      groupName:
                        groupFilter === 'all' && task.groupId ? groupMap.get(task.groupId) : null,
                      onOpen: () => setEditingId(task.id),
                      onToggle: toggleTask,
                      onRemove: removeTask,
                      t,
                      lang,
                    }),
                  ),
                );

          return h(
            'div',
            { className: 'dsh-todo-page' },
            h('style', null, CSS),
            h(
              'div',
              { className: 'dsh-todo-shell' },
              h(
                'header',
                { className: 'dsh-todo-head' },
                h('h1', { className: 'dsh-todo-title' }, t('title')),
                h(
                  'span',
                  { className: 'dsh-todo-count' },
                  t('itemsLeft').replace('{n}', String(activeCount)),
                ),
              ),
              addForm,
              groupsBar,
              toolbar,
              listNode,
            ),
            editingTask
              ? h(TaskDialog, {
                  key: editingTask.id,
                  task: editingTask,
                  groups,
                  onClose: () => setEditingId(null),
                })
              : null,
            managing ? h(GroupDialog, { onClose: () => setManaging(false) }) : null,
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
