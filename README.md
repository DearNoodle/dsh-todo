# dsh-todo

A small, focused todo list and notes space for the [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) Web UI. It lives in the sidebar as **To Do** and keeps everything in the browser.

## Tasks

- **Pages** each keep their own groups and tasks. Add pages from the rail on the left, rename one by editing its title, and delete it from the title row. The last page cannot be deleted.
- **Groups** organize a page. Create one below the list, rename it in place, or delete it; deleting a group moves its tasks to **Inbox**.
- Add tasks with an optional group and due date from the bar at the top. Press Enter or the **Add** button.
- Click a task's text to edit its title, notes, due date, and group.
- Tick a task to complete it. Finished tasks move below unfinished ones in each group.
- Filters: status (**All / Unfinished / Done**) and due date (**Any date / Today / Tomorrow / Next 7 days / Overdue / No date**).
- Due dates show a compact chip, brand-colored for today and red when overdue. A small note icon marks tasks with details.
- Clear completed tasks for the current page.

## Notes

- Switch to **Notes** at the top of the panel. Each note has a title and a free-form writing area.
- Drop image files directly into a note, or paste an image from the clipboard. Images are resized and compressed before being stored.
- Notes save automatically while you type. Deleting a note cannot be undone.

Everything is stored in this browser profile: tasks and pages in `localStorage` under `dsh-todo:v3`, notes under `dsh-todo:notes:v1`. Data from `dsh-todo:v2` and `dsh-todo:v1` is migrated to a single page automatically, so existing lists survive the upgrade.

Images are kept in `localStorage` too, so very large or numerous images can exhaust the browser quota. When that happens the note stays visible in memory but the panel shows a save error; use a smaller image or remove some images.

## Install

1. Open **Settings → Plugins** in the Harness Web UI.
2. Choose **Install bundle** and point it at this directory, or run `plugin_manager` with `action: "install_bundle"` and this directory as the target.
3. The **To Do** icon appears in the sidebar.

The bundle is a local package (`private: true`); there is no build step.

## Implementation notes

- UI text is localized in English and Chinese. The sidebar entry is always labeled **To Do**.
- Requires the Harness client packages `@deepseek-ai/dsh-client-ui-slots` and `@deepseek-ai/dsh-client-locale` (shipped with the Web UI).
- Removing the bundle leaves the stored list and notes untouched.
