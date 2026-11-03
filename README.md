# dsh-todo

A small, focused todo list for the [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) Web UI.

It adds a **Todo** icon to the sidebar. The panel holds a single personal list: add a task, tick it off, edit it by double-clicking, or delete it. The list is stored in the browser's `localStorage`, so it survives reloads and stays private to this browser profile.

## Install

From the Harness Web UI:

1. Open **Settings → Plugins**.
2. Choose **Install bundle** and point it at this directory (or run `plugin_manager` with `action: "install_bundle"` and this directory as the target).
3. The **Todo** icon appears in the sidebar.

The bundle is a local package (`private: true`); there is no build step.

## Notes

- Text is localized in English and Chinese.
- Data lives under the `dsh-todo:v1` key in `localStorage`; removing the bundle leaves it untouched.
- Requires the Harness client packages `@deepseek-ai/dsh-client-ui-slots` and `@deepseek-ai/dsh-client-locale` (shipped with the Web UI).
