# Note

Note plugin for Light Table.

## Install

```sh
git clone https://github.com/liquidz/lt-note Note
cd Note
npm install
```

## Usage

Following commands are available.


| Command    | Description        |
|:-----------|:-------------------|
| Note: New  | Create a new note. |
| Note: List | Display note list. |

## Setting

 - user.behaviors
```clojure
:app [
    ; Directory for saving notes.
    ; Default value: "$HOME/.notes"
    (:lt.plugins.note/set-note-dir "/foo/bar/notes")

    ; Filename format for notes.
    ; Default value: "YYYY/MM/YYYY-MM-DD-HHmmss[.md]"
    (:lt.plugins.note/set-filename-format "YYYY-MM-DD-HHmmss[.md]")
]
```


## License

Copyright (C) 2014 [uochan](http://twitter.com/uochan).

Distributed under the Eclipse Public License, the same as Clojure.
