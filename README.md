# dsh-todo

A small, focused todo list for the [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) Web UI. It lives in the sidebar as **To Do** and keeps one personal list in the browser.

## Features

- Add tasks with an optional due date; press Enter or the **Add** button.
- Click a task's text to open its details: title, free-form notes, due date, and group.
- Tick a task to complete it; completed tasks stay visible under **Done**.
- Groups: create, rename, and delete them from **Manage**. Deleting a group moves its tasks to **Inbox** instead of removing them.
- Filters: group chips, status (**All / Unfinished / Done**), and due date (**Any date / Today / Tomorrow / Next 7 days / Overdue / No date**).
- Due-date chips turn brand-colored for today and red when overdue.
- Clear completed tasks for the current group.

Everything is stored in `localStorage` under `dsh-todo:v2` (v1 data is migrated automatically), so the list survives reloads and never leaves this browser profile.

## Install

1. Open **Settings → Plugins** in the Harness Web UI.
2. Choose **Install bundle** and point it at this directory, or run `plugin_manager` with `action: "install_bundle"` and this directory as the target.
3. The **To Do** icon appears in the sidebar.

The bundle is a local package (`private: true`); there is no build step.

## Notes

- UI text is localized in English and Chinese. The sidebar entry is always labeled **To Do**.
- Requires the Harness client packages `@deepseek-ai/dsh-client-ui-slots` and `@deepseek-ai/dsh-client-locale` (shipped with the Web UI).
- Removing the bundle leaves the stored list untouched.
