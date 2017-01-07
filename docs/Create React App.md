# Create React App

Below is a log from my console session when creating the create-react-app project template.

I ran the following three commands:

    $ create-react-app create-react-app
    $ cd create-react-app
    $ npm run build

## Output From First Command

    odigity@desktop:~/src/academy/templates$ create-react-app create-react-app
    Creating a new React app in /home/odigity/src/academy/templates/create-react-app.

    Installing packages. This might take a couple minutes.
    Installing react-scripts...

    npm WARN prefer global marked@0.3.6 should be installed with -g
    foo@0.1.0 /home/odigity/src/academy/templates/create-react-app
    └─┬ react-scripts@0.8.4 
      ├─┬ autoprefixer@6.5.1 
      │ ├── browserslist@1.4.0 
      │ ├── caniuse-db@1.0.30000604 
      │ ├── normalize-range@0.1.2 
      │ ├── num2fraction@1.2.2 
      │ ├─┬ postcss@5.2.8 
      │ │ └── js-base64@2.1.9 
      │ └── postcss-value-parser@3.3.0 
      ├─┬ babel-core@6.17.0 
      │ ├─┬ babel-code-frame@6.20.0 
      │ │ └── js-tokens@2.0.0 
      │ ├─┬ babel-generator@6.21.0 
      │ │ ├─┬ detect-indent@4.0.0 
      │ │ │ └─┬ repeating@2.0.1 
      │ │ │   └── is-finite@1.0.2 
      │ │ └── jsesc@1.3.0 
      │ ├── babel-helpers@6.16.0 
      │ ├── babel-messages@6.8.0 
      │ ├─┬ babel-register@6.18.0 
      │ │ ├─┬ babel-core@6.21.0 
      │ │ │ └── json5@0.5.1 
      │ │ ├── core-js@2.4.1 
      │ │ ├─┬ home-or-tmp@2.0.0 
      │ │ │ └── os-tmpdir@1.0.2 
      │ │ └── source-map-support@0.4.8 
      │ ├─┬ babel-runtime@6.20.0 
      │ │ └── regenerator-runtime@0.10.1 
      │ ├── babel-template@6.16.0 
      │ ├─┬ babel-traverse@6.21.0 
      │ │ └─┬ invariant@2.2.2 
      │ │   └── loose-envify@1.3.0 
      │ ├─┬ babel-types@6.21.0 
      │ │ └── to-fast-properties@1.0.2 
      │ ├── babylon@6.14.1 
      │ ├── convert-source-map@1.3.0 
      │ ├─┬ debug@2.6.0 
      │ │ └── ms@0.7.2 
      │ ├── json5@0.4.0 
      │ ├── lodash@4.17.4 
      │ ├─┬ minimatch@3.0.3 
      │ │ └─┬ brace-expansion@1.1.6 
      │ │   ├── balanced-match@0.4.2 
      │ │   └── concat-map@0.0.1 
      │ ├── path-exists@1.0.0 
      │ ├── path-is-absolute@1.0.1 
      │ ├── private@0.1.6 
      │ ├── shebang-regex@1.0.0 
      │ ├── slash@1.0.0 
      │ └── source-map@0.5.6 
      ├─┬ babel-eslint@7.1.1 
      │ └── lodash.pickby@4.6.0 
      ├─┬ babel-jest@17.0.2 
      │ ├─┬ babel-plugin-istanbul@2.0.3 
      │ │ ├── find-up@1.1.2 
      │ │ ├─┬ istanbul-lib-instrument@1.4.2 
      │ │ │ └── semver@5.3.0 
      │ │ └─┬ test-exclude@2.1.3 
      │ │   ├── arrify@1.0.1 
      │ │   ├─┬ read-pkg-up@1.0.1 
      │ │   │ └─┬ read-pkg@1.1.0 
      │ │   │   ├─┬ load-json-file@1.1.0 
      │ │   │   │ └─┬ strip-bom@2.0.0 
      │ │   │   │   └── is-utf8@0.2.1 
      │ │   │   ├─┬ normalize-package-data@2.3.5 
      │ │   │   │ ├── hosted-git-info@2.1.5 
      │ │   │   │ ├── is-builtin-module@1.0.0 
      │ │   │   │ └─┬ validate-npm-package-license@3.0.1 
      │ │   │   │   ├─┬ spdx-correct@1.0.2 
      │ │   │   │   │ └── spdx-license-ids@1.2.2 
      │ │   │   │   └── spdx-expression-parse@1.0.4 
      │ │   │   └── path-type@1.1.0 
      │ │   └── require-main-filename@1.0.1 
      │ └─┬ babel-preset-jest@17.0.2 
      │   └── babel-plugin-jest-hoist@17.0.2 
      ├─┬ babel-loader@6.2.7 
      │ ├─┬ find-cache-dir@0.1.1 
      │ │ ├── commondir@1.0.1 
      │ │ └── pkg-dir@1.0.0 
      │ ├─┬ loader-utils@0.2.16 
      │ │ ├── big.js@3.1.3 
      │ │ ├── emojis-list@2.1.0 
      │ │ └── json5@0.5.1 
      │ └─┬ mkdirp@0.5.1 
      │   └── minimist@0.0.8 
      ├─┬ babel-preset-react-app@2.0.1 
      │ ├─┬ babel-plugin-transform-class-properties@6.16.0 
      │ │ ├── babel-helper-function-name@6.18.0 
      │ │ └── babel-plugin-syntax-class-properties@6.13.0 
      │ ├─┬ babel-plugin-transform-es2015-parameters@6.18.0 
      │ │ ├─┬ babel-helper-call-delegate@6.18.0 
      │ │ │ └── babel-helper-hoist-variables@6.18.0 
      │ │ └── babel-helper-get-function-arity@6.18.0 
      │ ├─┬ babel-plugin-transform-object-rest-spread@6.19.0 
      │ │ └── babel-plugin-syntax-object-rest-spread@6.13.0 
      │ ├── babel-plugin-transform-react-constant-elements@6.9.1 
      │ ├─┬ babel-plugin-transform-react-jsx@6.8.0 
      │ │ ├── babel-helper-builder-react-jsx@6.21.1 
      │ │ └── babel-plugin-syntax-jsx@6.18.0 
      │ ├── babel-plugin-transform-react-jsx-self@6.11.0 
      │ ├── babel-plugin-transform-react-jsx-source@6.9.0 
      │ ├── babel-plugin-transform-regenerator@6.16.1 
      │ ├── babel-plugin-transform-runtime@6.15.0 
      │ ├─┬ babel-preset-env@0.0.8 
      │ │ ├── babel-plugin-check-es2015-constants@6.8.0 
      │ │ ├── babel-plugin-syntax-trailing-function-commas@6.20.0 
      │ │ ├─┬ babel-plugin-transform-async-to-generator@6.16.0 
      │ │ │ ├── babel-helper-remap-async-to-generator@6.20.3 
      │ │ │ └── babel-plugin-syntax-async-functions@6.13.0 
      │ │ ├── babel-plugin-transform-es2015-arrow-functions@6.8.0 
      │ │ ├── babel-plugin-transform-es2015-block-scoped-functions@6.8.0 
      │ │ ├── babel-plugin-transform-es2015-block-scoping@6.21.0 
      │ │ ├─┬ babel-plugin-transform-es2015-classes@6.18.0 
      │ │ │ ├── babel-helper-define-map@6.18.0 
      │ │ │ ├── babel-helper-optimise-call-expression@6.18.0 
      │ │ │ └── babel-helper-replace-supers@6.18.0 
      │ │ ├── babel-plugin-transform-es2015-computed-properties@6.8.0 
      │ │ ├── babel-plugin-transform-es2015-destructuring@6.19.0 
      │ │ ├── babel-plugin-transform-es2015-duplicate-keys@6.8.0 
      │ │ ├── babel-plugin-transform-es2015-for-of@6.18.0 
      │ │ ├── babel-plugin-transform-es2015-function-name@6.9.0 
      │ │ ├── babel-plugin-transform-es2015-literals@6.8.0 
      │ │ ├── babel-plugin-transform-es2015-modules-amd@6.18.0 
      │ │ ├─┬ babel-plugin-transform-es2015-modules-commonjs@6.18.0 
      │ │ │ └── babel-plugin-transform-strict-mode@6.18.0 
      │ │ ├── babel-plugin-transform-es2015-modules-systemjs@6.19.0 
      │ │ ├── babel-plugin-transform-es2015-modules-umd@6.18.0 
      │ │ ├── babel-plugin-transform-es2015-object-super@6.8.0 
      │ │ ├── babel-plugin-transform-es2015-shorthand-properties@6.18.0 
      │ │ ├── babel-plugin-transform-es2015-spread@6.8.0 
      │ │ ├─┬ babel-plugin-transform-es2015-sticky-regex@6.8.0 
      │ │ │ └── babel-helper-regex@6.18.0 
      │ │ ├── babel-plugin-transform-es2015-template-literals@6.8.0 
      │ │ ├── babel-plugin-transform-es2015-typeof-symbol@6.18.0 
      │ │ ├─┬ babel-plugin-transform-es2015-unicode-regex@6.11.0 
      │ │ │ └── regexpu-core@2.0.0 
      │ │ └─┬ babel-plugin-transform-exponentiation-operator@6.8.0 
      │ │   ├─┬ babel-helper-builder-binary-assignment-operator-visitor@6.18.0 
      │ │   │ └── babel-helper-explode-assignable-expression@6.18.0 
      │ │   └── babel-plugin-syntax-exponentiation-operator@6.13.0 
      │ ├─┬ babel-preset-latest@6.16.0 
      │ │ ├── babel-preset-es2015@6.18.0 
      │ │ ├── babel-preset-es2016@6.16.0 
      │ │ └── babel-preset-es2017@6.16.0 
      │ ├─┬ babel-preset-react@6.16.0 
      │ │ ├── babel-plugin-syntax-flow@6.18.0 
      │ │ ├── babel-plugin-transform-flow-strip-types@6.21.0 
      │ │ └── babel-plugin-transform-react-display-name@6.8.0 
      │ └─┬ babel-runtime@6.11.6 
      │   └── regenerator-runtime@0.9.6 
      ├── case-sensitive-paths-webpack-plugin@1.1.4 
      ├─┬ chalk@1.1.3 
      │ ├── ansi-styles@2.2.1 
      │ ├── escape-string-regexp@1.0.5 
      │ ├── has-ansi@2.0.0 
      │ └── supports-color@2.0.0 
      ├── connect-history-api-fallback@1.3.0 
      ├─┬ cross-spawn@4.0.2 
      │ ├─┬ lru-cache@4.0.2 
      │ │ ├── pseudomap@1.0.2 
      │ │ └── yallist@2.0.0 
      │ └─┬ which@1.2.12 
      │   └── isexe@1.1.2 
      ├─┬ css-loader@0.26.0 
      │ ├─┬ css-selector-tokenizer@0.7.0 
      │ │ ├── cssesc@0.1.0 
      │ │ ├── fastparse@1.1.1 
      │ │ └─┬ regexpu-core@1.0.0 
      │ │   ├── regenerate@1.3.2 
      │ │   ├── regjsgen@0.2.0 
      │ │   └─┬ regjsparser@0.1.5 
      │ │     └── jsesc@0.5.0 
      │ ├─┬ cssnano@3.10.0 
      │ │ ├── decamelize@1.2.0 
      │ │ ├── defined@1.0.0 
      │ │ ├─┬ postcss-calc@5.3.1 
      │ │ │ ├── postcss-message-helpers@2.0.0 
      │ │ │ └─┬ reduce-css-calc@1.3.0 
      │ │ │   ├─┬ math-expression-evaluator@1.2.14 
      │ │ │   │ └── lodash.indexof@4.0.5 
      │ │ │   └── reduce-function-call@1.0.2 
      │ │ ├─┬ postcss-colormin@2.2.1 
      │ │ │ └─┬ colormin@1.1.2 
      │ │ │   ├─┬ color@0.11.4 
      │ │ │   │ ├─┬ color-convert@1.8.2 
      │ │ │   │ │ └── color-name@1.1.1 
      │ │ │   │ └── color-string@0.3.0 
      │ │ │   └── css-color-names@0.0.4 
      │ │ ├── postcss-convert-values@2.6.0 
      │ │ ├── postcss-discard-comments@2.0.4 
      │ │ ├── postcss-discard-duplicates@2.0.2 
      │ │ ├── postcss-discard-empty@2.1.0 
      │ │ ├── postcss-discard-overridden@0.1.1 
      │ │ ├─┬ postcss-discard-unused@2.2.3 
      │ │ │ └── uniqs@2.0.0 
      │ │ ├─┬ postcss-filter-plugins@2.0.2 
      │ │ │ └─┬ uniqid@4.1.1 
      │ │ │   └── macaddress@0.2.8 
      │ │ ├── postcss-merge-idents@2.1.7 
      │ │ ├── postcss-merge-longhand@2.0.1 
      │ │ ├─┬ postcss-merge-rules@2.0.11 
      │ │ │ └── vendors@1.0.1 
      │ │ ├── postcss-minify-font-values@1.0.5 
      │ │ ├── postcss-minify-gradients@1.0.5 
      │ │ ├─┬ postcss-minify-params@1.2.2 
      │ │ │ └── alphanum-sort@1.0.2 
      │ │ ├─┬ postcss-minify-selectors@2.1.1 
      │ │ │ └─┬ postcss-selector-parser@2.2.2 
      │ │ │   ├── flatten@1.0.2 
      │ │ │   ├── indexes-of@1.0.1 
      │ │ │   └── uniq@1.0.1 
      │ │ ├── postcss-normalize-charset@1.1.1 
      │ │ ├─┬ postcss-normalize-url@3.0.8 
      │ │ │ ├── is-absolute-url@2.1.0 
      │ │ │ └─┬ normalize-url@1.8.0 
      │ │ │   ├── prepend-http@1.0.4 
      │ │ │   ├─┬ query-string@4.2.3 
      │ │ │   │ └── strict-uri-encode@1.1.0 
      │ │ │   └─┬ sort-keys@1.1.2 
      │ │ │     └── is-plain-obj@1.1.0 
      │ │ ├── postcss-ordered-values@2.2.2 
      │ │ ├── postcss-reduce-idents@2.4.0 
      │ │ ├── postcss-reduce-initial@1.0.1 
      │ │ ├── postcss-reduce-transforms@1.0.4 
      │ │ ├─┬ postcss-svgo@2.1.6 
      │ │ │ ├─┬ is-svg@2.1.0 
      │ │ │ │ └── html-comment-regex@1.1.1 
      │ │ │ └─┬ svgo@0.7.1 
      │ │ │   ├─┬ coa@1.0.1 
      │ │ │   │ └── q@1.4.1 
      │ │ │   ├── colors@1.1.2 
      │ │ │   ├─┬ csso@2.2.1 
      │ │ │   │ └── clap@1.1.2 
      │ │ │   ├── sax@1.2.1 
      │ │ │   └── whet.extend@0.9.9 
      │ │ ├── postcss-unique-selectors@2.0.2 
      │ │ └── postcss-zindex@2.2.0 
      │ ├── lodash.camelcase@4.3.0 
      │ ├── postcss-modules-extract-imports@1.0.1 
      │ ├─┬ postcss-modules-local-by-default@1.1.1 
      │ │ └─┬ css-selector-tokenizer@0.6.0 
      │ │   └── regexpu-core@1.0.0 
      │ ├─┬ postcss-modules-scope@1.0.2 
      │ │ └─┬ css-selector-tokenizer@0.6.0 
      │ │   └── regexpu-core@1.0.0 
      │ ├─┬ postcss-modules-values@1.2.2 
      │ │ └── icss-replace-symbols@1.0.2 
      │ └── source-list-map@0.1.7 
      ├─┬ detect-port@1.0.1 
      │ └─┬ commander@2.8.1 
      │   └── graceful-readlink@1.0.1 
      ├── dotenv@2.0.0 
      ├─┬ eslint@3.8.1 
      │ ├─┬ concat-stream@1.6.0 
      │ │ ├── inherits@2.0.3 
      │ │ ├─┬ readable-stream@2.2.2 
      │ │ │ ├── buffer-shims@1.0.0 
      │ │ │ ├── core-util-is@1.0.2 
      │ │ │ ├── process-nextick-args@1.0.7 
      │ │ │ └── util-deprecate@1.0.2 
      │ │ └── typedarray@0.0.6 
      │ ├─┬ doctrine@1.5.0 
      │ │ └── isarray@1.0.0 
      │ ├─┬ escope@3.6.0 
      │ │ ├─┬ es6-map@0.1.4 
      │ │ │ ├── d@0.1.1 
      │ │ │ ├── es5-ext@0.10.12 
      │ │ │ ├── es6-iterator@2.0.0 
      │ │ │ ├── es6-set@0.1.4 
      │ │ │ ├── es6-symbol@3.1.0 
      │ │ │ └── event-emitter@0.3.4 
      │ │ ├── es6-weak-map@2.0.1 
      │ │ └─┬ esrecurse@4.1.0 
      │ │   └── estraverse@4.1.1 
      │ ├─┬ espree@3.3.2 
      │ │ ├── acorn@4.0.4 
      │ │ └─┬ acorn-jsx@3.0.1 
      │ │   └── acorn@3.3.0 
      │ ├── estraverse@4.2.0 
      │ ├── esutils@2.0.2 
      │ ├─┬ file-entry-cache@2.0.0 
      │ │ └─┬ flat-cache@1.2.2 
      │ │   ├── circular-json@0.3.1 
      │ │   ├─┬ del@2.2.2 
      │ │   │ ├── globby@5.0.0 
      │ │   │ ├── is-path-cwd@1.0.0 
      │ │   │ ├─┬ is-path-in-cwd@1.0.0 
      │ │   │ │ └── is-path-inside@1.0.0 
      │ │   │ └── pify@2.3.0 
      │ │   └── write@0.2.1 
      │ ├─┬ glob@7.1.1 
      │ │ ├── fs.realpath@1.0.0 
      │ │ ├─┬ inflight@1.0.6 
      │ │ │ └── wrappy@1.0.2 
      │ │ └── once@1.4.0 
      │ ├── globals@9.14.0 
      │ ├── ignore@3.2.0 
      │ ├── imurmurhash@0.1.4 
      │ ├─┬ inquirer@0.12.0 
      │ │ ├── ansi-escapes@1.4.0 
      │ │ ├─┬ cli-cursor@1.0.2 
      │ │ │ └─┬ restore-cursor@1.0.1 
      │ │ │   ├── exit-hook@1.1.1 
      │ │ │   └── onetime@1.1.0 
      │ │ ├── cli-width@2.1.0 
      │ │ ├── figures@1.7.0 
      │ │ ├─┬ readline2@1.0.1 
      │ │ │ ├── code-point-at@1.1.0 
      │ │ │ ├─┬ is-fullwidth-code-point@1.0.0 
      │ │ │ │ └── number-is-nan@1.0.1 
      │ │ │ └── mute-stream@0.0.5 
      │ │ ├── run-async@0.1.0 
      │ │ ├── rx-lite@3.1.2 
      │ │ ├── string-width@1.0.2 
      │ │ └── through@2.3.8 
      │ ├─┬ is-my-json-valid@2.15.0 
      │ │ ├── generate-function@2.0.0 
      │ │ ├─┬ generate-object-property@1.2.0 
      │ │ │ └── is-property@1.0.2 
      │ │ ├── jsonpointer@4.0.1 
      │ │ └── xtend@4.0.1 
      │ ├─┬ is-resolvable@1.0.0 
      │ │ └── tryit@1.0.3 
      │ ├─┬ js-yaml@3.6.1 
      │ │ ├─┬ argparse@1.0.9 
      │ │ │ └── sprintf-js@1.0.3 
      │ │ └── esprima@2.7.3 
      │ ├─┬ json-stable-stringify@1.0.1 
      │ │ └── jsonify@0.0.0 
      │ ├─┬ levn@0.3.0 
      │ │ ├── prelude-ls@1.1.2 
      │ │ └── type-check@0.3.2 
      │ ├── natural-compare@1.4.0 
      │ ├─┬ optionator@0.8.2 
      │ │ ├── deep-is@0.1.3 
      │ │ ├── fast-levenshtein@2.0.6 
      │ │ └── wordwrap@1.0.0 
      │ ├── path-is-inside@1.0.2 
      │ ├── pluralize@1.2.1 
      │ ├── progress@1.1.8 
      │ ├─┬ require-uncached@1.0.3 
      │ │ ├─┬ caller-path@0.1.0 
      │ │ │ └── callsites@0.2.0 
      │ │ └── resolve-from@1.0.1 
      │ ├── shelljs@0.6.1 
      │ ├── strip-bom@3.0.0 
      │ ├── strip-json-comments@1.0.4 
      │ ├─┬ table@3.8.3 
      │ │ ├─┬ ajv@4.10.4 
      │ │ │ └── co@4.6.0 
      │ │ ├── ajv-keywords@1.5.0 
      │ │ ├── slice-ansi@0.0.4 
      │ │ └─┬ string-width@2.0.0 
      │ │   └── is-fullwidth-code-point@2.0.0 
      │ ├── text-table@0.2.0 
      │ └─┬ user-home@2.0.0 
      │   └── os-homedir@1.0.2 
      ├── eslint-config-react-app@0.5.0 
      ├── eslint-loader@1.6.0 
      ├── eslint-plugin-flowtype@2.21.0 
      ├─┬ eslint-plugin-import@2.0.1 
      │ ├── builtin-modules@1.1.1 
      │ ├── contains-path@0.1.0 
      │ ├── doctrine@1.3.0 
      │ ├─┬ eslint-import-resolver-node@0.2.3 
      │ │ └── resolve@1.2.0 
      │ ├─┬ eslint-module-utils@1.0.0 
      │ │ └─┬ debug@2.2.0 
      │ │   └── ms@0.7.1 
      │ ├─┬ has@1.0.1 
      │ │ └── function-bind@1.1.0 
      │ ├── lodash.cond@4.5.2 
      │ └── pkg-up@1.0.0 
      ├─┬ eslint-plugin-jsx-a11y@2.2.3 
      │ ├── damerau-levenshtein@1.0.3 
      │ └── jsx-ast-utils@1.3.5 
      ├── eslint-plugin-react@6.4.1 
      ├─┬ extract-text-webpack-plugin@1.0.1 
      │ ├── async@1.5.2 
      │ └── webpack-sources@0.1.3 
      ├── file-loader@0.9.0 
      ├── filesize@3.3.0 
      ├─┬ fs-extra@0.30.0 
      │ ├── graceful-fs@4.1.11 
      │ ├── jsonfile@2.4.0 
      │ ├── klaw@1.3.1 
      │ └── rimraf@2.5.4 
      ├─┬ gzip-size@3.0.0 
      │ └── duplexer@0.1.1 
      ├─┬ html-webpack-plugin@2.24.0 
      │ ├── bluebird@3.4.7 
      │ ├─┬ html-minifier@3.2.3 
      │ │ ├─┬ camel-case@3.0.0 
      │ │ │ ├─┬ no-case@2.3.1 
      │ │ │ │ └── lower-case@1.1.3 
      │ │ │ └── upper-case@1.1.3 
      │ │ ├─┬ clean-css@3.4.23 
      │ │ │ └── source-map@0.4.4 
      │ │ ├── commander@2.9.0 
      │ │ ├── he@1.1.0 
      │ │ ├─┬ ncname@1.0.0 
      │ │ │ └── xml-char-classes@1.0.0 
      │ │ ├── param-case@2.1.0 
      │ │ └── relateurl@0.2.7 
      │ ├─┬ pretty-error@2.0.2 
      │ │ ├─┬ renderkid@2.0.0 
      │ │ │ ├─┬ css-select@1.2.0 
      │ │ │ │ ├── boolbase@1.0.0 
      │ │ │ │ ├── css-what@2.1.0 
      │ │ │ │ ├─┬ domutils@1.5.1 
      │ │ │ │ │ └─┬ dom-serializer@0.1.0 
      │ │ │ │ │   ├── domelementtype@1.1.3 
      │ │ │ │ │   └── entities@1.1.1 
      │ │ │ │ └── nth-check@1.0.1 
      │ │ │ ├─┬ dom-converter@0.1.4 
      │ │ │ │ └── utila@0.3.3 
      │ │ │ ├─┬ htmlparser2@3.3.0 
      │ │ │ │ ├── domelementtype@1.3.0 
      │ │ │ │ ├── domhandler@2.1.0 
      │ │ │ │ ├── domutils@1.1.6 
      │ │ │ │ └─┬ readable-stream@1.0.34 
      │ │ │ │   └── isarray@0.0.1 
      │ │ │ └── utila@0.3.3 
      │ │ └── utila@0.4.0 
      │ └── toposort@1.0.0 
      ├─┬ http-proxy-middleware@0.17.2 
      │ ├─┬ http-proxy@1.16.2 
      │ │ ├── eventemitter3@1.2.0 
      │ │ └── requires-port@1.0.0 
      │ ├─┬ is-glob@3.1.0 
      │ │ └── is-extglob@2.1.1 
      │ └─┬ micromatch@2.3.11 
      │   ├─┬ arr-diff@2.0.0 
      │   │ └── arr-flatten@1.0.1 
      │   ├── array-unique@0.2.1 
      │   ├─┬ braces@1.8.5 
      │   │ ├─┬ expand-range@1.8.2 
      │   │ │ └─┬ fill-range@2.2.3 
      │   │ │   ├── is-number@2.1.0 
      │   │ │   ├── isobject@2.1.0 
      │   │ │   ├── randomatic@1.1.6 
      │   │ │   └── repeat-string@1.6.1 
      │   │ ├── preserve@0.2.0 
      │   │ └── repeat-element@1.1.2 
      │   ├─┬ expand-brackets@0.1.5 
      │   │ └── is-posix-bracket@0.1.1 
      │   ├── extglob@0.3.2 
      │   ├── filename-regex@2.0.0 
      │   ├── is-extglob@1.0.0 
      │   ├── is-glob@2.0.1 
      │   ├─┬ kind-of@3.1.0 
      │   │ └── is-buffer@1.1.4 
      │   ├── normalize-path@2.0.1 
      │   ├─┬ object.omit@2.0.1 
      │   │ ├─┬ for-own@0.1.4 
      │   │ │ └── for-in@0.1.6 
      │   │ └── is-extendable@0.1.1 
      │   ├─┬ parse-glob@3.0.4 
      │   │ ├── glob-base@0.3.0 
      │   │ └── is-dotfile@1.0.2 
      │   └─┬ regex-cache@0.4.3 
      │     ├── is-equal-shallow@0.1.3 
      │     └── is-primitive@2.0.0 
      ├─┬ jest@17.0.2 
      │ └─┬ jest-cli@17.0.3 
      │   ├── callsites@2.0.0 
      │   ├─┬ is-ci@1.0.10 
      │   │ └── ci-info@1.0.0 
      │   ├─┬ istanbul-api@1.1.0 
      │   │ ├── async@2.1.4 
      │   │ ├── fileset@2.0.3 
      │   │ ├─┬ istanbul-lib-hook@1.0.0-alpha.4 
      │   │ │ └── append-transform@0.3.0 
      │   │ ├─┬ istanbul-lib-report@1.0.0-alpha.3 
      │   │ │ └── path-parse@1.0.5 
      │   │ ├── istanbul-lib-source-maps@1.1.0 
      │   │ ├─┬ istanbul-reports@1.0.0 
      │   │ │ └─┬ handlebars@4.0.6 
      │   │ │   └── source-map@0.4.4 
      │   │ └── js-yaml@3.7.0 
      │   ├── istanbul-lib-coverage@1.0.0 
      │   ├── jest-changed-files@17.0.2 
      │   ├─┬ jest-config@17.0.3 
      │   │ ├─┬ istanbul@0.4.5 
      │   │ │ ├── abbrev@1.0.9 
      │   │ │ ├─┬ escodegen@1.8.1 
      │   │ │ │ ├── estraverse@1.9.3 
      │   │ │ │ └── source-map@0.2.0 
      │   │ │ ├── glob@5.0.15 
      │   │ │ ├── nopt@3.0.6 
      │   │ │ └── resolve@1.1.7 
      │   │ └── jest-environment-node@17.0.2 
      │   ├─┬ jest-environment-jsdom@17.0.2 
      │   │ └─┬ jsdom@9.9.1 
      │   │   ├── abab@1.0.3 
      │   │   ├── acorn@2.7.0 
      │   │   ├─┬ acorn-globals@1.0.9 
      │   │   │ └── acorn@2.7.0 
      │   │   ├── array-equal@1.0.0 
      │   │   ├── content-type-parser@1.0.1 
      │   │   ├── cssom@0.3.1 
      │   │   ├── cssstyle@0.2.37 
      │   │   ├── html-encoding-sniffer@1.0.1 
      │   │   ├── iconv-lite@0.4.15 
      │   │   ├── nwmatcher@1.3.9 
      │   │   ├── parse5@1.5.1 
      │   │   ├─┬ request@2.79.0 
      │   │   │ ├── aws-sign2@0.6.0 
      │   │   │ ├── aws4@1.5.0 
      │   │   │ ├── caseless@0.11.0 
      │   │   │ ├─┬ combined-stream@1.0.5 
      │   │   │ │ └── delayed-stream@1.0.0 
      │   │   │ ├── extend@3.0.0 
      │   │   │ ├── forever-agent@0.6.1 
      │   │   │ ├─┬ form-data@2.1.2 
      │   │   │ │ └── asynckit@0.4.0 
      │   │   │ ├─┬ har-validator@2.0.6 
      │   │   │ │ └── commander@2.9.0 
      │   │   │ ├─┬ hawk@3.1.3 
      │   │   │ │ ├── boom@2.10.1 
      │   │   │ │ ├── cryptiles@2.0.5 
      │   │   │ │ ├── hoek@2.16.3 
      │   │   │ │ └── sntp@1.0.9 
      │   │   │ ├─┬ http-signature@1.1.1 
      │   │   │ │ ├── assert-plus@0.2.0 
      │   │   │ │ ├─┬ jsprim@1.3.1 
      │   │   │ │ │ ├── extsprintf@1.0.2 
      │   │   │ │ │ ├── json-schema@0.2.3 
      │   │   │ │ │ └── verror@1.3.6 
      │   │   │ │ └─┬ sshpk@1.10.1 
      │   │   │ │   ├── asn1@0.2.3 
      │   │   │ │   ├── assert-plus@1.0.0 
      │   │   │ │   ├── bcrypt-pbkdf@1.0.0 
      │   │   │ │   ├─┬ dashdash@1.14.1 
      │   │   │ │   │ └── assert-plus@1.0.0 
      │   │   │ │   ├── ecc-jsbn@0.1.1 
      │   │   │ │   ├─┬ getpass@0.1.6 
      │   │   │ │   │ └── assert-plus@1.0.0 
      │   │   │ │   ├── jodid25519@1.0.2 
      │   │   │ │   ├── jsbn@0.1.0 
      │   │   │ │   └── tweetnacl@0.14.5 
      │   │   │ ├── is-typedarray@1.0.0 
      │   │   │ ├── isstream@0.1.2 
      │   │   │ ├── json-stringify-safe@5.0.1 
      │   │   │ ├── oauth-sign@0.8.2 
      │   │   │ ├── qs@6.3.0 
      │   │   │ ├── stringstream@0.0.5 
      │   │   │ ├── tunnel-agent@0.4.3 
      │   │   │ └── uuid@3.0.1 
      │   │   ├── symbol-tree@3.2.1 
      │   │   ├── tough-cookie@2.3.2 
      │   │   ├── webidl-conversions@3.0.1 
      │   │   ├─┬ whatwg-encoding@1.0.1 
      │   │   │ └── iconv-lite@0.4.13 
      │   │   ├─┬ whatwg-url@4.2.0 
      │   │   │ └── tr46@0.0.3 
      │   │   └── xml-name-validator@2.0.1 
      │   ├── jest-file-exists@17.0.0 
      │   ├─┬ jest-haste-map@17.0.3 
      │   │ ├─┬ fb-watchman@1.9.0 
      │   │ │ └─┬ bser@1.0.2 
      │   │ │   └── node-int64@0.4.0 
      │   │ └─┬ multimatch@2.1.0 
      │   │   ├── array-differ@1.0.0 
      │   │   └─┬ array-union@1.0.2 
      │   │     └── array-uniq@1.0.3 
      │   ├─┬ jest-jasmine2@17.0.3 
      │   │ └── jest-matchers@17.0.3 
      │   ├── jest-mock@17.0.2 
      │   ├─┬ jest-resolve@17.0.3 
      │   │ └─┬ browser-resolve@1.11.2 
      │   │   └── resolve@1.1.7 
      │   ├── jest-resolve-dependencies@17.0.3 
      │   ├─┬ jest-runtime@17.0.3 
      │   │ └─┬ yargs@6.6.0 
      │   │   ├── camelcase@3.0.0 
      │   │   └── cliui@3.2.0 
      │   ├─┬ jest-snapshot@17.0.3 
      │   │ ├── jest-diff@17.0.3 
      │   │ ├── jest-matcher-utils@17.0.3 
      │   │ └── pretty-format@4.2.3 
      │   ├─┬ jest-util@17.0.2 
      │   │ └── diff@3.2.0 
      │   ├─┬ node-notifier@4.6.1 
      │   │ ├─┬ cli-usage@0.1.4 
      │   │ │ ├── marked@0.3.6 
      │   │ │ └─┬ marked-terminal@1.7.0 
      │   │ │   ├─┬ cardinal@1.0.0 
      │   │ │   │ ├── ansicolors@0.2.1 
      │   │ │   │ └─┬ redeyed@1.0.1 
      │   │ │   │   └── esprima@3.0.0 
      │   │ │   ├─┬ cli-table@0.3.1 
      │   │ │   │ └── colors@1.0.3 
      │   │ │   ├── lodash.assign@4.2.0 
      │   │ │   └─┬ node-emoji@1.5.0 
      │   │ │     └── string.prototype.codepointat@0.2.0 
      │   │ ├── growly@1.3.0 
      │   │ ├─┬ lodash.clonedeep@3.0.2 
      │   │ │ ├─┬ lodash._baseclone@3.3.0 
      │   │ │ │ ├── lodash._arraycopy@3.0.0 
      │   │ │ │ ├── lodash._arrayeach@3.0.0 
      │   │ │ │ ├─┬ lodash._baseassign@3.2.0 
      │   │ │ │ │ └── lodash._basecopy@3.0.1 
      │   │ │ │ ├── lodash._basefor@3.0.3 
      │   │ │ │ ├── lodash.isarray@3.0.4 
      │   │ │ │ └─┬ lodash.keys@3.1.2 
      │   │ │ │   ├── lodash._getnative@3.9.1 
      │   │ │ │   └── lodash.isarguments@3.1.0 
      │   │ │ └── lodash._bindcallback@3.0.1 
      │   │ ├── minimist@1.2.0 
      │   │ └── shellwords@0.1.0 
      │   ├─┬ sane@1.4.1 
      │   │ ├─┬ exec-sh@0.2.0 
      │   │ │ └── merge@1.2.0 
      │   │ ├── minimist@1.2.0 
      │   │ ├─┬ walker@1.0.7 
      │   │ │ └─┬ makeerror@1.0.11 
      │   │ │   └── tmpl@1.0.4 
      │   │ └── watch@0.10.0 
      │   ├── throat@3.0.0 
      │   ├── worker-farm@1.3.1 
      │   └─┬ yargs@6.6.0 
      │     ├── camelcase@3.0.0 
      │     ├─┬ cliui@3.2.0 
      │     │ └── wrap-ansi@2.1.0 
      │     ├── get-caller-file@1.0.2 
      │     ├─┬ os-locale@1.4.0 
      │     │ └─┬ lcid@1.0.0 
      │     │   └── invert-kv@1.0.0 
      │     ├── require-directory@2.1.1 
      │     ├── set-blocking@2.0.0 
      │     ├── which-module@1.0.0 
      │     ├── y18n@3.2.1 
      │     └─┬ yargs-parser@4.2.1 
      │       └── camelcase@3.0.0 
      ├── json-loader@0.5.4 
      ├── object-assign@4.1.0 
      ├─┬ path-exists@2.1.0 
      │ └─┬ pinkie-promise@2.0.1 
      │   └── pinkie@2.0.4 
      ├─┬ postcss-loader@1.0.0 
      │ └─┬ postcss-load-config@1.0.0 
      │   ├─┬ cosmiconfig@2.1.1 
      │   │ ├── minimist@1.2.0 
      │   │ ├─┬ parse-json@2.2.0 
      │   │ │ └─┬ error-ex@1.3.0 
      │   │ │   └── is-arrayish@0.2.1 
      │   │ └── require-from-string@1.2.1 
      │   ├── postcss-load-options@1.1.0 
      │   └── postcss-load-plugins@2.1.0 
      ├─┬ promise@7.1.1 
      │ └── asap@2.0.5 
      ├─┬ react-dev-utils@0.4.2 
      │ ├── ansi-html@0.0.5 
      │ ├── html-entities@1.2.0 
      │ ├── opn@4.0.2 
      │ └─┬ sockjs-client@1.0.3 
      │   ├─┬ eventsource@0.1.6 
      │   │ └─┬ original@1.0.0 
      │   │   └── url-parse@1.0.5 
      │   ├─┬ faye-websocket@0.7.3 
      │   │ └─┬ websocket-driver@0.6.5 
      │   │   └── websocket-extensions@0.1.1 
      │   ├── json3@3.3.2 
      │   └─┬ url-parse@1.1.7 
      │     └── querystringify@0.0.4 
      ├─┬ recursive-readdir@2.1.0 
      │ └── minimatch@3.0.2 
      ├─┬ strip-ansi@3.0.1 
      │ └── ansi-regex@2.0.0 
      ├── style-loader@0.13.1 
      ├─┬ url-loader@0.5.7 
      │ └── mime@1.2.11 
      ├─┬ webpack@1.14.0 
      │ ├── acorn@3.3.0 
      │ ├── clone@1.0.2 
      │ ├─┬ enhanced-resolve@0.9.1 
      │ │ └── memory-fs@0.2.0 
      │ ├── interpret@0.6.6 
      │ ├─┬ memory-fs@0.3.0 
      │ │ └─┬ errno@0.1.4 
      │ │   └── prr@0.0.0 
      │ ├─┬ node-libs-browser@0.7.0 
      │ │ ├── assert@1.4.1 
      │ │ ├─┬ browserify-zlib@0.1.4 
      │ │ │ └── pako@0.2.9 
      │ │ ├─┬ buffer@4.9.1 
      │ │ │ ├── base64-js@1.2.0 
      │ │ │ └── ieee754@1.1.8 
      │ │ ├─┬ console-browserify@1.1.0 
      │ │ │ └── date-now@0.1.4 
      │ │ ├── constants-browserify@1.0.0 
      │ │ ├─┬ crypto-browserify@3.3.0 
      │ │ │ ├── browserify-aes@0.4.0 
      │ │ │ ├── pbkdf2-compat@2.0.1 
      │ │ │ ├── ripemd160@0.2.0 
      │ │ │ └── sha.js@2.2.6 
      │ │ ├── domain-browser@1.1.7 
      │ │ ├── events@1.1.1 
      │ │ ├── https-browserify@0.0.1 
      │ │ ├── os-browserify@0.2.1 
      │ │ ├── path-browserify@0.0.0 
      │ │ ├── process@0.11.9 
      │ │ ├── punycode@1.4.1 
      │ │ ├── querystring-es3@0.2.1 
      │ │ ├── stream-browserify@2.0.1 
      │ │ ├─┬ stream-http@2.6.0 
      │ │ │ ├── builtin-status-codes@3.0.0 
      │ │ │ └── to-arraybuffer@1.0.1 
      │ │ ├── string_decoder@0.10.31 
      │ │ ├─┬ timers-browserify@2.0.2 
      │ │ │ └── setimmediate@1.0.5 
      │ │ ├── tty-browserify@0.0.0 
      │ │ ├─┬ url@0.11.0 
      │ │ │ ├── punycode@1.3.2 
      │ │ │ └── querystring@0.2.0 
      │ │ ├─┬ util@0.10.3 
      │ │ │ └── inherits@2.0.1 
      │ │ └─┬ vm-browserify@0.0.4 
      │ │   └── indexof@0.0.1 
      │ ├─┬ optimist@0.6.1 
      │ │ └── wordwrap@0.0.3 
      │ ├─┬ supports-color@3.1.2 
      │ │ └── has-flag@1.0.0 
      │ ├── tapable@0.1.10 
      │ ├─┬ uglify-js@2.7.5 
      │ │ ├── async@0.2.10 
      │ │ ├── uglify-to-browserify@1.0.2 
      │ │ └─┬ yargs@3.10.0 
      │ │   ├── camelcase@1.2.1 
      │ │   ├─┬ cliui@2.1.0 
      │ │   │ ├─┬ center-align@0.1.3 
      │ │   │ │ ├─┬ align-text@0.1.4 
      │ │   │ │ │ └── longest@1.0.1 
      │ │   │ │ └── lazy-cache@1.0.4 
      │ │   │ ├── right-align@0.1.3 
      │ │   │ └── wordwrap@0.0.2 
      │ │   └── window-size@0.1.0 
      │ ├─┬ watchpack@0.2.9 
      │ │ ├── async@0.9.2 
      │ │ └─┬ chokidar@1.6.1 
      │ │   ├── anymatch@1.3.0 
      │ │   ├── async-each@1.0.1 
      │ │   ├── glob-parent@2.0.0 
      │ │   ├─┬ is-binary-path@1.0.1 
      │ │   │ └── binary-extensions@1.8.0 
      │ │   └─┬ readdirp@2.1.0 
      │ │     └── set-immediate-shim@1.0.1 
      │ └─┬ webpack-core@0.6.9 
      │   └─┬ source-map@0.4.4 
      │     └── amdefine@1.0.1 
      ├─┬ webpack-dev-server@1.16.2 
      │ ├─┬ compression@1.6.2 
      │ │ ├─┬ accepts@1.3.3 
      │ │ │ └── negotiator@0.6.1 
      │ │ ├── bytes@2.3.0 
      │ │ ├─┬ compressible@2.0.9 
      │ │ │ └── mime-db@1.25.0 
      │ │ ├─┬ debug@2.2.0 
      │ │ │ └── ms@0.7.1 
      │ │ ├── on-headers@1.0.1 
      │ │ └── vary@1.1.0 
      │ ├─┬ express@4.14.0 
      │ │ ├── array-flatten@1.1.1 
      │ │ ├── content-disposition@0.5.1 
      │ │ ├── content-type@1.0.2 
      │ │ ├── cookie@0.3.1 
      │ │ ├── cookie-signature@1.0.6 
      │ │ ├─┬ debug@2.2.0 
      │ │ │ └── ms@0.7.1 
      │ │ ├── depd@1.1.0 
      │ │ ├── encodeurl@1.0.1 
      │ │ ├── escape-html@1.0.3 
      │ │ ├── etag@1.7.0 
      │ │ ├─┬ finalhandler@0.5.0 
      │ │ │ ├─┬ debug@2.2.0 
      │ │ │ │ └── ms@0.7.1 
      │ │ │ ├── statuses@1.3.1 
      │ │ │ └── unpipe@1.0.0 
      │ │ ├── fresh@0.3.0 
      │ │ ├── merge-descriptors@1.0.1 
      │ │ ├── methods@1.1.2 
      │ │ ├─┬ on-finished@2.3.0 
      │ │ │ └── ee-first@1.1.1 
      │ │ ├── parseurl@1.3.1 
      │ │ ├── path-to-regexp@0.1.7 
      │ │ ├─┬ proxy-addr@1.1.2 
      │ │ │ ├── forwarded@0.1.0 
      │ │ │ └── ipaddr.js@1.1.1 
      │ │ ├── qs@6.2.0 
      │ │ ├── range-parser@1.2.0 
      │ │ ├─┬ send@0.14.1 
      │ │ │ ├── debug@2.2.0 
      │ │ │ ├── destroy@1.0.4 
      │ │ │ ├── mime@1.3.4 
      │ │ │ └── ms@0.7.1 
      │ │ ├── serve-static@1.11.1 
      │ │ ├─┬ type-is@1.6.14 
      │ │ │ └── media-typer@0.3.0 
      │ │ └── utils-merge@1.0.0 
      │ ├── open@0.0.5 
      │ ├─┬ serve-index@1.8.0 
      │ │ ├── batch@0.5.3 
      │ │ ├─┬ debug@2.2.0 
      │ │ │ └── ms@0.7.1 
      │ │ ├─┬ http-errors@1.5.1 
      │ │ │ └── setprototypeof@1.0.2 
      │ │ └── mime-types@2.1.13 
      │ ├─┬ sockjs@0.3.18 
      │ │ ├── faye-websocket@0.10.0 
      │ │ └── uuid@2.0.3 
      │ ├── stream-cache@0.0.2 
      │ └─┬ webpack-dev-middleware@1.9.0 
      │   ├── memory-fs@0.4.1 
      │   └── mime@1.3.4 
      ├── webpack-manifest-plugin@1.1.0 
      └── whatwg-fetch@1.0.0 

    npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.0.14 (node_modules/react-scripts/node_modules/fsevents):
    npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.0.14: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
    npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^1.0.0 (node_modules/chokidar/node_modules/fsevents):
    npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.0.17: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
    Installing react and react-dom using npm...

    create-react-app@0.1.0 /home/odigity/src/academy/templates/create-react-app
    ├─┬ react@15.4.2 
    │ └─┬ fbjs@0.8.8 
    │   ├── core-js@1.2.7 
    │   ├─┬ isomorphic-fetch@2.2.1 
    │   │ └─┬ node-fetch@1.6.3 
    │   │   ├── encoding@0.1.12 
    │   │   └── is-stream@1.1.0 
    │   └── ua-parser-js@0.7.12 
    └── react-dom@15.4.2 

    npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^1.0.0 (node_modules/chokidar/node_modules/fsevents):
    npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.0.17: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
    npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.0.14 (node_modules/react-scripts/node_modules/fsevents):
    npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.0.14: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

    Success! Created create-react-app at /home/odigity/src/academy/templates/create-react-app
    Inside that directory, you can run several commands:

      npm start
        Starts the development server.

      npm run build
        Bundles the app into static files for production.

      npm test
        Starts the test runner.

      npm run eject
        Removes this tool and copies build dependencies, configuration files
        and scripts into the app directory. If you do this, you can’t go back!

    We suggest that you begin by typing:

      cd foo
      npm start

    Happy hacking!

## Output From Third Command

    odigity@desktop:~//src/academy/templates/create-react-app$ npm run build

    > create-react-app@0.1.0 build /home/odigity/src/academy/templates/create-react-app
    > react-scripts build

    Creating an optimized production build...
    Compiled successfully.

    File sizes after gzip:

      45.91 KB  build/static/js/main.61ab9133.js
      289 B     build/static/css/main.9a0fe4f1.css

    The project was built assuming it is hosted at the server root.
    To override this, specify the homepage in your package.json.
    For example, add this to build it for GitHub Pages:

      "homepage": "http://myname.github.io/myapp",

    The build folder is ready to be deployed.
    You may also serve it locally with a static server:

      npm install -g pushstate-server
      pushstate-server build
      open http://localhost:9000
