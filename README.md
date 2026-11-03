# dsh-todo

A small, focused todo list and notes space for the [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) Web UI. It lives in the sidebar as a **To Do** panel and keeps everything in the browser — no account, no server, no network calls.

## Features

**Pages.** Each page is a separate list with its own groups and tasks. Add one with the **+** in the rail head, rename it by editing the title in the page header, and delete it with the trash icon in the same row (the last remaining page is protected). The rail shows each page's open-task count.

**Groups.** Groups split a page into sections. Create one at the bottom of the list, rename it in place, or delete it — its tasks move to **Inbox** instead of disappearing. Each header shows how many of its tasks are still open.

**Tasks.** Add a task from the composer at the top of the list, optionally with a group and a due date; press <kbd>Enter</kbd> to add. Click a task's text to edit its title, notes, due date, and group in a dialog. Tick the checkbox to complete it; finished tasks sort below unfinished ones inside each group. A hairline meter under the page header tracks the page's finished share.

**Due dates.** The due picker is a built-in calendar — month grid, keyboard arrows, Today and Clear shortcuts — instead of the browser's native date dialog, so it matches the panel's look in both light and dark themes. Due chips sit in a fixed right-hand column so rows never shift; today is marked in ink, overdue in red.

**Filters.** Filter by status (**All / Unfinished / Done**) and by due window (**Any date / Today / Tomorrow / Next 7 days / Overdue / No date**). **Clear completed** removes finished tasks from the current page.

**Notes.** Switch to **Notes** in the header. Each note has a title and a free-form writing area that saves as you type. Drop image files into a note or paste an image from the clipboard; images are scaled to at most 1400 px on the long edge and re-encoded before storage. The **edited** stamp under the title shows the last save.

**Theme and language.** The panel is built on the active Harness theme's tokens and follows light/dark mode automatically. All UI text is localized in English and Chinese through the Harness locale system; the sidebar entry stays **To Do**.

## Install

### From the plugin manager

1. Open **Settings → Plugins** in the Harness Web UI.
2. Choose **Install bundle** and point it at this directory.
3. The **To Do** icon appears in the sidebar.

### From the CLI

```sh
dsh plugin --profile <profile> add C:/path/to/dsh-todo
```

The bundle is a local package (`private: true`) with **no build step** — the shipped `client.js` is what runs in the browser.

## Usage notes

- Everything is local to the browser profile. Removing the bundle leaves the stored lists untouched.
- Tasks, pages, and groups live in `localStorage` under `dsh-todo:v3`; notes live under `dsh-todo:notes:v1`. Data from `dsh-todo:v2` and `dsh-todo:v1` is migrated into a single page on first load, so older lists survive the upgrade.
- Images are stored in `localStorage` as well. Many large images can exhaust the browser quota; when that happens the note stays visible in memory but the editor reports a save error — remove an image, or use a smaller one.
- Deleting a note cannot be undone.

## Development

```sh
git clone https://github.com/DearNoodle/dsh-todo.git
node --check client.js         # syntax check; there is no bundler
```

Then install the checkout as a bundle (above) and reload the Web UI. To pick up `client.js` edits after the plugin is installed, reload the bundle in **Settings → Plugins** (or reinstall it) and refresh the page.

| File | Purpose |
| --- | --- |
| `client.js` | The entire panel: stylesheet, store, components, and `apply(ctx)` |
| `index.js` | Host half — intentionally empty; the bundle has no host-side behaviour |
| `cordis.patch.yml` | Inserts the bundle's `dsh-todo` plugin entry into the profile |
| `locale/en.json`, `locale/zh.json` | Plugin title and description shown in the plugin manager |
| `icon.svg` | Sidebar icon |

The client module is registered through `window.__ModuleLoader__` and only requires `react` plus the Harness client packages `@deepseek-ai/dsh-client-ui-slots` and `@deepseek-ai/dsh-client-locale`, both shipped with the Web UI. State is plain `localStorage` behind a small subscribe/emit store, so there is no backend and no build pipeline.

## Limitations

- Single device, single browser profile: data does not sync.
- No import/export yet.
- Notes are stored as sanitized HTML with images inlined, which is not meant for very long documents.

## License

No license file is included yet; treat this repository as all rights reserved until one is added.
