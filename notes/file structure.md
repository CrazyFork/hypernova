
## Files

    src
    ├── Module.js                       # !a customized Module implementation running inside vm that comply with node's interface
    ├── coordinator.js                  # encapsulate some work that dealing with clusters & workers
    ├── createGetComponent.js           # resolve path, compile & run reuest module, return its exports
    ├── createVM.js                     # wrap around Moudle.js, provide a vm functionality
    ├── environment.js                  # some set up work
    ├── getFiles.js                     # a utility function return file's full path & relative path
    ├── index.js                        # encode/decode data into/from script tag, lib's entrance file.
    ├── loadModules.js                  # utlity functions, I dono what they mean to be .
    ├── server.js                       # start server process, spawn child process
    ├── utils
    │   ├── BatchManager.js             # execute jobs(rendering react components), log jobs' status, 
    │   ├── lifecycle.js                # wrap around batch manager, inject some lifecycle logic in
    │   ├── logger.js                   # a winston logger
    │   └── renderBatch.js              # utils entry file, wrap `lifecycle.js`
    └── worker.js                       # start child worker process


