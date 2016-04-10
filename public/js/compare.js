var aceDiffer = new AceDiff({
    mode: "ace/mode/javascript",
    showConnectors: true,
    theme: "ace/theme/github",
    diffGranularity: "specific",
    left: {
        id: "acediff-left-editor",
        content: codefrom,
        editable: false,
        copyLinkEnabled: false
    },
    right: {
        id: "acediff-right-editor",
        content: codeto,
        editable: false,
        copyLinkEnabled: false
    },
    classes: {
        gutterID: "acediff-gutter"
    }
});
