Relative path only works on v12.17.0+ (inc 13), but does not work in v12.16.0

Absolute Path works on v12.16.0, but does not work in v12.7.0+ (inc 13)

v12.17.0/v13.0.0 shows the webpack error saying:

```


 Module not found: Error: Can't resolve '/Users/caleb/Work/sandbox/cy-next-ct/a  pps/demo/Users/caleb/Work/sandbox/cy-next-c
t/apps/demo/cypress/support/compone  nt-index.html' in '/Users/caleb/Work/sandbox/cy-next-ct'
```

But v13.0.0 seems to hang the first CT test.

v12.17.0 shows the error

```

 AppComponent
   1) renders
 0 passing (210ms)
 1 failing
 1) AppComponent
      renders:
    Error: No element found that matches selector [data-cy-root]. Please add a root element with data-cy-root attribute to y
our "component-index.html" file so that Cypress can attach your component to the DOM.

```

and then finishes the test run.

v12.16.0 show the same error with relative pathing (but with different path)

```
ERROR in   Error: Child compilation failed:
  Module not found: Error: Can't resolve '/Users/caleb/Work/sandbox/cy-next-ct/c  ypress/support/component-index.html' in '/U
sers/caleb/Work/sandbox/cy-next-ct'  ModuleNotFoundError: Module not found: Error: Can't resolve '/Users/caleb/Work  /sandbox
/cy-next-ct/cypress/support/component-index.html' in '/Users/caleb/Wor  k/sandbox/cy-next-ct'
```

it still finishes the run with the same error as v12.17.0

see demo app cy config in apps/demo/cypress.config.ts

run with `nx component-test demo` and switch out the different configurations

the nx preset defaults to use absolute paths, but is breaking for later cy versions, but it doesn't seem safe to just switch to relative which will start breaking existing folks who haven't update to v12.17.0+
