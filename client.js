window.__ModuleLoader__.load({
  id: 'dsh-todo',
  factory(require) {
    const React = require('react');
    const h = React.createElement;

    const NS = 'dsh-todo';
    const STORAGE_KEY = 'dsh-todo:v1';

    const EN = {
      title: 'Todo',
      placeholder: 'Add a task…',
      add: 'Add',
      filterAll: 'All',
      filterActive: 'Active',
      filterCompleted: 'Done',
      itemsLeft: '{n} left',
      clearCompleted: 'Clear completed',
      emptyTitle: 'No tasks yet',
      emptyHint: 'Add your first task above.',
      nothingHere: 'Nothing in this view.',
      delete: 'Delete task',
      markDone: 'Mark as done',
      markActive: 'Mark as active',
      editHint: 'Double-click to edit',
    };

    const ZH = {
      title: '待辦清單',
      placeholder: '新增一件事…',
      add: '新增',
      filterAll: '全部',
      filterActive: '進行中',
      filterCompleted: '已完成',
      itemsLeft: '尚餘 {n} 項',
      clearCompleted: '清除已完成',
      emptyTitle: '還沒有待辦事項',
      emptyHint: '從上面新增第一件事吧。',
      nothingHere: '這個檢視沒有項目。',
      delete: '刪除事項',
      markDone: '標記為完成',
      markActive: '標記為未完成',
      editHint: '雙擊可編輯',
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
  max-width: 680px;
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
  gap: 8px;
  margin-bottom: 14px;
}
.dsh-todo-input,
.dsh-todo-edit {
  min-width: 0;
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
.dsh-todo-input { flex: 1; }
.dsh-todo-input::placeholder { color: var(--dsw-alias-label-secondary); }
.dsh-todo-input:focus,
.dsh-todo-edit:focus {
  border-color: var(--dsw-alias-brand-primary);
  box-shadow: 0 0 0 1px var(--dsw-alias-brand-primary);
}
.dsh-todo-addbtn {
  height: 40px;
  padding: 0 16px;
  border: 0;
  border-radius: 9px;
  background: var(--dsw-alias-brand-primary);
  color: #fff;
  font: inherit;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}
.dsh-todo-addbtn:disabled { opacity: 0.45; cursor: default; }
.dsh-todo-addbtn:focus-visible,
.dsh-todo-filter:focus-visible,
.dsh-todo-delete:focus-visible,
.dsh-todo-clear:focus-visible {
  outline: 2px solid var(--dsw-alias-brand-primary);
  outline-offset: 2px;
}
.dsh-todo-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
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
  gap: 10px;
  padding: 11px 12px;
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
  font-size: 14px;
  line-height: 1.45;
  overflow-wrap: anywhere;
}
.dsh-todo-row[data-done="true"] .dsh-todo-text {
  color: var(--dsw-alias-label-secondary);
  text-decoration: line-through;
  text-decoration-color: var(--dsw-alias-border-l2);
}
.dsh-todo-edit { flex: 1; height: 30px; padding: 0 8px; }
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
@media (max-width: 560px) {
  .dsh-todo-shell { padding: 28px 16px 72px; }
}
`;

    let items = [];
    const listeners = new Set();

    function emit() {
      for (const listener of listeners) listener();
    }

    function loadItems() {
      try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];
        return parsed
          .filter((item) => item && typeof item.text === 'string')
          .map((item, index) => ({
            id: typeof item.id === 'string' && item.id ? item.id : 'todo-' + index + '-' + Date.now(),
            text: item.text,
            done: item.done === true,
            createdAt: Number.isFinite(item.createdAt) ? item.createdAt : 0,
          }));
      } catch {
        return [];
      }
    }

    function saveItems() {
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      } catch {
        // Storage can be unavailable (private mode); the list still works in memory.
      }
    }

    function setItems(next) {
      items = next;
      saveItems();
      emit();
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

    function addItem(text) {
      const value = text.trim();
      if (!value) return;
      setItems([
        { id: newId(), text: value, done: false, createdAt: Date.now() },
        ...items,
      ]);
    }

    function toggleItem(id) {
      setItems(items.map((item) => (item.id === id ? { ...item, done: !item.done } : item)));
    }

    function removeItem(id) {
      setItems(items.filter((item) => item.id !== id));
    }

    function renameItem(id, text) {
      const value = text.trim();
      if (!value) {
        removeItem(id);
        return;
      }
      setItems(items.map((item) => (item.id === id ? { ...item, text: value } : item)));
    }

    function clearCompleted() {
      setItems(items.filter((item) => !item.done));
    }

    function useItems() {
      const [, force] = React.useState(0);
      React.useEffect(() => {
        const listener = () => force((n) => n + 1);
        listeners.add(listener);
        return () => {
          listeners.delete(listener);
        };
      }, []);
      return items;
    }

    function useLocaleTick(locale) {
      const [, force] = React.useState(0);
      React.useEffect(
        () => locale.subscribe(() => force((n) => n + 1)),
        [locale],
      );
    }

    function TrashIcon() {
      return h(
        'svg',
        {
          width: 14,
          height: 14,
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: 1.8,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          'aria-hidden': 'true',
        },
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
        items = loadItems();
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
            items = loadItems();
            emit();
          };
          window.addEventListener('storage', onStorage);
          return () => window.removeEventListener('storage', onStorage);
        }, 'dsh-todo: cross-tab sync');

        function Page() {
          useLocaleTick(ctx.locale);
          const list = useItems();
          const [draft, setDraft] = React.useState('');
          const [filter, setFilter] = React.useState('all');
          const [editingId, setEditingId] = React.useState(null);
          const [editingText, setEditingText] = React.useState('');
          const cancelEdit = React.useRef(false);

          const activeCount = list.filter((item) => !item.done).length;
          const doneCount = list.length - activeCount;
          const visible = list.filter((item) => {
            if (filter === 'active') return !item.done;
            if (filter === 'completed') return item.done;
            return true;
          });

          function startEdit(item) {
            cancelEdit.current = false;
            setEditingText(item.text);
            setEditingId(item.id);
          }

          function commitEdit() {
            if (cancelEdit.current) {
              cancelEdit.current = false;
              setEditingId(null);
              return;
            }
            if (editingId !== null) renameItem(editingId, editingText);
            setEditingId(null);
          }

          function cancelEditing() {
            cancelEdit.current = true;
            setEditingId(null);
          }

          const filters = [
            ['all', t('filterAll')],
            ['active', t('filterActive')],
            ['completed', t('filterCompleted')],
          ];

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
                h('span', { className: 'dsh-todo-count' }, t('itemsLeft').replace('{n}', String(activeCount))),
              ),
              h(
                'form',
                {
                  className: 'dsh-todo-add',
                  onSubmit: (event) => {
                    event.preventDefault();
                    addItem(draft);
                    setDraft('');
                  },
                },
                h('input', {
                  className: 'dsh-todo-input',
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
                  'button',
                  { className: 'dsh-todo-addbtn', type: 'submit', disabled: !draft.trim() },
                  t('add'),
                ),
              ),
              list.length > 0
                ? h(
                    'div',
                    { className: 'dsh-todo-toolbar' },
                    h(
                      'div',
                      { className: 'dsh-todo-filters', role: 'group', 'aria-label': t('title') },
                      filters.map(([id, label]) =>
                        h(
                          'button',
                          {
                            key: id,
                            type: 'button',
                            className: 'dsh-todo-filter',
                            'aria-pressed': filter === id,
                            onClick: () => setFilter(id),
                          },
                          label,
                        ),
                      ),
                    ),
                    doneCount > 0
                      ? h(
                          'button',
                          { className: 'dsh-todo-clear', type: 'button', onClick: clearCompleted },
                          t('clearCompleted'),
                        )
                      : null,
                  )
                : null,
              visible.length === 0
                ? h(
                    'div',
                    { className: 'dsh-todo-empty' },
                    h(
                      'div',
                      { className: 'dsh-todo-empty-title' },
                      list.length === 0 ? t('emptyTitle') : t('nothingHere'),
                    ),
                    list.length === 0
                      ? h('div', { className: 'dsh-todo-empty-hint' }, t('emptyHint'))
                      : null,
                  )
                : h(
                    'ul',
                    { className: 'dsh-todo-list' },
                    visible.map((item) =>
                      h(
                        'li',
                        {
                          key: item.id,
                          className: 'dsh-todo-row',
                          'data-done': item.done ? 'true' : 'false',
                        },
                        h('input', {
                          type: 'checkbox',
                          className: 'dsh-todo-check',
                          checked: item.done,
                          onChange: () => toggleItem(item.id),
                          'aria-label': item.done ? t('markActive') : t('markDone'),
                        }),
                        editingId === item.id
                          ? h('input', {
                              className: 'dsh-todo-edit',
                              value: editingText,
                              autoFocus: true,
                              onChange: (event) => setEditingText(event.target.value),
                              onBlur: commitEdit,
                              onKeyDown: (event) => {
                                if (event.key === 'Enter') {
                                  event.preventDefault();
                                  commitEdit();
                                } else if (event.key === 'Escape') {
                                  event.preventDefault();
                                  cancelEditing();
                                }
                              },
                              'aria-label': t('editHint'),
                            })
                          : h(
                              'span',
                              {
                                className: 'dsh-todo-text',
                                title: t('editHint'),
                                onDoubleClick: () => startEdit(item),
                              },
                              item.text,
                            ),
                        h(
                          'button',
                          {
                            className: 'dsh-todo-delete',
                            type: 'button',
                            onClick: () => removeItem(item.id),
                            'aria-label': t('delete'),
                            title: t('delete'),
                          },
                          h(TrashIcon),
                        ),
                      ),
                    ),
                  ),
            ),
          );
        }

        ctx.slots.inject('sidebar.panellist', () =>
          ctx.slots.register(
            {
              name: 'sidebar.panellist',
              id: 'todo',
              order: 20,
              label: () => t('title'),
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
