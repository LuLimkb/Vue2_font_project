# app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

```
app
├─ .eslintrc.js
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-applypatch
│  │  ├─ post-checkout
│  │  ├─ post-commit
│  │  ├─ post-merge
│  │  ├─ post-receive
│  │  ├─ post-rewrite
│  │  ├─ post-update
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-auto-gc
│  │  ├─ pre-commit
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate
│  │  ├─ update
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  └─ master
│  │     └─ remotes
│  │        └─ origin
│  │           └─ master
│  ├─ objects
│  │  ├─ 03
│  │  │  └─ 4da4d0b0f9fc2c60f098841e18964c874a8576
│  │  ├─ 05
│  │  │  ├─ 36360ebbb495540c8fc81578da1e2e24a65dee
│  │  │  └─ cc7446cb02debdbfd57df12d18760cc9361dee
│  │  ├─ 06
│  │  │  └─ 19f1a9a778945dcee258356c837616aaf847f6
│  │  ├─ 07
│  │  │  └─ d0ea12cb16034d83bdc6b6a8b5eeb9c22c557f
│  │  ├─ 0c
│  │  │  └─ 6ad4cc55d222c1bb88838d15097faa5a1612e2
│  │  ├─ 0d
│  │  │  └─ df11a826c698a2ae7103403b2ffb1befacac91
│  │  ├─ 0e
│  │  │  └─ 9d80fc699990d91e529683b86913aa3300fe1b
│  │  ├─ 13
│  │  │  ├─ 1707aab6d0ccac14c88d9d6ad05f4de709636a
│  │  │  └─ 5a82a1bf1622c36ac75d3c95a845f58a06f887
│  │  ├─ 14
│  │  │  └─ 4e46494fc788d62262d752cb5328a2bc9c3692
│  │  ├─ 15
│  │  │  └─ 24b9aa2947daa26ae2cd9abbdcd5ba04f7a386
│  │  ├─ 17
│  │  │  └─ bcab3db278d20fa710f85be038c449d535cbd8
│  │  ├─ 1a
│  │  │  └─ a678cfba5c840eaef0c2ea5741cff5d2096778
│  │  ├─ 1c
│  │  │  └─ c4e3dbd3d561bc16314278bd715d3ebfdfa9dd
│  │  ├─ 1f
│  │  │  └─ 446e2e60aebce3451e2301f552b6e91c1ef4ed
│  │  ├─ 21
│  │  │  ├─ 02ec74522b98916350d6bb4d2996c02bb2175a
│  │  │  ├─ ad44ae3896391ad3c0046a9629a18362def3d7
│  │  │  └─ efedc8746e4f7c9ab8bc008c2dd01165bd811a
│  │  ├─ 26
│  │  │  └─ 70745e241c20dacd3dd5ad286fe391be914141
│  │  ├─ 27
│  │  │  └─ 95139bb0fe0ec56bf1bd298ae38344cbcdfb5c
│  │  ├─ 28
│  │  │  └─ 843776842b9086c21b00c2f7603a6ffcb1b7da
│  │  ├─ 29
│  │  │  └─ 497e67513aaaefdedf35813b27a0acfd97c1be
│  │  ├─ 30
│  │  │  └─ ac8d49078cb2a8db3040ba872dba60104f0ef2
│  │  ├─ 31
│  │  │  ├─ 2d088c81749bfc46a4dcc818b6d159fbdd9aff
│  │  │  └─ 6b4921c4f4a42178ab15ea57a67278bf5ed487
│  │  ├─ 33
│  │  │  └─ 4bd3856e7907188a1b887bbf37264662be0c2b
│  │  ├─ 38
│  │  │  └─ 0c8df05ef306bc07e7b0c78deaf0bb070148f9
│  │  ├─ 3d
│  │  │  └─ 17de2b80ee0e36c206291897743aaa65558fee
│  │  ├─ 3e
│  │  │  ├─ 5a13962197105f2078d2a224cc57dfa09b4893
│  │  │  └─ e034ec44f0ad69404984b027752505512987b9
│  │  ├─ 40
│  │  │  └─ 3adbc1e527906a4aa59558cd582c20bcd1d738
│  │  ├─ 42
│  │  │  └─ a27da509700ec4a484c90f89f0eec94df6ab97
│  │  ├─ 43
│  │  │  ├─ 3723807df02c4ecc5a2945db505981524486f9
│  │  │  └─ 3b24888fab7b7ef3aac4acaebe2e09f0401c01
│  │  ├─ 44
│  │  │  └─ 414750b3b7618caa144663cb39b21ae2afa3fa
│  │  ├─ 47
│  │  │  └─ 5c891965363ff38855f2e6cf63a3f155a43bed
│  │  ├─ 49
│  │  │  ├─ 94510ddc81094b0c070b1dd889e0e00dc0fd85
│  │  │  └─ a199e43da2fe192206645825076ca5f60b9633
│  │  ├─ 4a
│  │  │  ├─ 38c24348a29b6eebb1d041ef37e87cd152afa0
│  │  │  └─ afc5f6ed86fe6dff8d4b6be59290cbdeb61656
│  │  ├─ 4b
│  │  │  └─ 75c710efc6e616944bea7c7e7493c98accfa3f
│  │  ├─ 4c
│  │  │  └─ d2a94256613b1098b0e0b7b1d9d95fbf182fef
│  │  ├─ 4d
│  │  │  └─ ee79f2a2101465765030d19e15fc2f9b4eb66e
│  │  ├─ 4f
│  │  │  ├─ 398cc7dcea00da74d461827c419be15e56f501
│  │  │  └─ 861d5830ae51dbdece17a26a069a26af4ea789
│  │  ├─ 51
│  │  │  └─ 6e1bd697ca2bbb3d3602c06c101b1e74cc8f09
│  │  ├─ 52
│  │  │  └─ 71c7007965709740eb882387ca338a6a176548
│  │  ├─ 53
│  │  │  └─ 18ec35c4aeac2d4e7e957bb81b6de977b51f00
│  │  ├─ 55
│  │  │  └─ df315325bff60798291a7a13720ef273f6c3bb
│  │  ├─ 59
│  │  │  └─ b552e0561cd6d513cd6fa87a6ed5814cd9bd1f
│  │  ├─ 5b
│  │  │  └─ 960ee5361146cc5a91b0c93d576519383604bc
│  │  ├─ 5d
│  │  │  ├─ 91e7637712df7ebfd1f64bb60af120ae06e4b4
│  │  │  └─ b660f75e3738efd72a29a28edafe9f5a1bfc89
│  │  ├─ 5e
│  │  │  └─ aa40d62440957717410e7751977c2821e7c72f
│  │  ├─ 60
│  │  │  └─ 181ee78369afb9eae6b5195e8168191f6e360f
│  │  ├─ 62
│  │  │  └─ 9dc6ac5b5510a5d73b13dd26913ec74304e8b1
│  │  ├─ 63
│  │  │  ├─ 8fcfcc7cc8f8212e15c48be113440e9c824a04
│  │  │  └─ eb05f711c8cb5cda45128882fa69c351f105fb
│  │  ├─ 64
│  │  │  └─ afaea7e0f99e8262f35bd394af63c86e2c04b3
│  │  ├─ 65
│  │  │  └─ 10c6a45035b6573151ff6196e4bdea78deb75d
│  │  ├─ 67
│  │  │  └─ 9b57d9558f9c0233de80ba76a48da73f7a340d
│  │  ├─ 6a
│  │  │  └─ ecf55b9d25884370be42c23d55915f274a0f1b
│  │  ├─ 6b
│  │  │  ├─ e464544c789accf9fb4c05e7f72dc00a370bd8
│  │  │  └─ e6e086d33dc40e2f26a7c25ba9891face1aa5b
│  │  ├─ 6c
│  │  │  └─ 71d80c6a73e783c3a9dc1fa906986e3927e22e
│  │  ├─ 74
│  │  │  └─ 0c2aa1a44843571aaf64eac2abd8700ef0e844
│  │  ├─ 76
│  │  │  └─ 2dd4c92e7abdcdabbfc10d4e030fb52779f11b
│  │  ├─ 77
│  │  │  └─ 6a8be2e43e7a062319fda33c46c414e883805c
│  │  ├─ 79
│  │  │  └─ ca3386986f5fb7ed44be785652154c37f840ba
│  │  ├─ 7a
│  │  │  └─ e75897fdbadc118bb430df3207604849270318
│  │  ├─ 7d
│  │  │  └─ d562c0892ef9880f4372a4d481734c817cceed
│  │  ├─ 7e
│  │  │  ├─ 2603c2ed9f6ee22d92f3497fefe3c752b2b647
│  │  │  ├─ 702b3ed73ee4165c8808b0fba8e28017928974
│  │  │  └─ d425e2f150b5ee5f8b549e451c86a52822fb9c
│  │  ├─ 80
│  │  │  └─ b2bd716cfac38b298a63fc9b9648ccd7509b74
│  │  ├─ 84
│  │  │  └─ b08a32df24992d5425bfea594abca7fc42bd60
│  │  ├─ 87
│  │  │  └─ 9051a29739fdfb17ae82ed23b53fac251c2b7e
│  │  ├─ 8a
│  │  │  ├─ 852003fcd8f08f9c56b165b7e9a0046b27a6f8
│  │  │  └─ f47d98b8da80650b8f7e4ada53f6c87d3b5b86
│  │  ├─ 8b
│  │  │  └─ 202cb2a51796da2d6fef264a72bf517e6fe8a6
│  │  ├─ 91
│  │  │  ├─ 0e297e0f53483455d2aa432887c3b7975d6c11
│  │  │  └─ 36a7c40d24ff3eddacc553acab60fc9004629f
│  │  ├─ 94
│  │  │  ├─ 7a32b011dce2feeb1d2cc880afb8d567627c99
│  │  │  ├─ 890dfdda1497124ed564a919f6d7b510790ed2
│  │  │  └─ eabd6eb1f7f5aaa4bb3d8761f308dd82199fc6
│  │  ├─ 97
│  │  │  └─ 6f693b45ed6dced67ad25a1e501b25393ec25f
│  │  ├─ 99
│  │  │  └─ bf960e214e73e5513e054ac34c331b6d4b1a46
│  │  ├─ 9a
│  │  │  └─ c95d18a912ab03e48d44f3f171b86ae3a2d293
│  │  ├─ 9e
│  │  │  └─ 6977d409375b21ef5d5cb66d0b276f01280ec9
│  │  ├─ a4
│  │  │  └─ 8d2641ed6bef5227c1d3a6d666e4c8e328aaf9
│  │  ├─ a6
│  │  │  ├─ 1fa61368623478940503dd27af6b935191e551
│  │  │  └─ 80bc40884c2aaf7f168c0755f45b65eafb26a8
│  │  ├─ a7
│  │  │  ├─ 2eb48762661d7bfb33e1aa09037a5c2c3f00f7
│  │  │  └─ a629a1e634495cb2f711aa5cfa375a75f05eac
│  │  ├─ ab
│  │  │  └─ 5a050e69d744d6b04e9530044b1baaf0ebb832
│  │  ├─ ad
│  │  │  └─ 163d4742a01527b510b87c87b7390bbdbd8dba
│  │  ├─ b0
│  │  │  └─ fd0c9df4261094a5daafb7f72430a6d21b935a
│  │  ├─ b2
│  │  │  └─ d0edc498eba41d373963a772caafa75378acec
│  │  ├─ b3
│  │  │  └─ b96866762a05efeb65db936c303120a611e2f6
│  │  ├─ b5
│  │  │  └─ 0d6538e2351115f535dfac81a2974552d388a4
│  │  ├─ b9
│  │  │  └─ 60e84ef7f0e86a8ad051797fd44bc28e16ed11
│  │  ├─ bc
│  │  │  └─ 533390978de958ef1c5b33758a4fa66737f3f2
│  │  ├─ c0
│  │  │  └─ b4a4f1043e187a06d907cb2e605fa9690ff7a4
│  │  ├─ c1
│  │  │  ├─ 1e79d00e7d749b562e0b3f5e958751e0d154dd
│  │  │  └─ 360c0e81960f57b2fbf97863deead17da713b1
│  │  ├─ c3
│  │  │  ├─ 844b06ba91c41026dc73a28e0e5f93fed58d7d
│  │  │  └─ f4ad0dedc2501ce7da88c54b9cb5e4f639778a
│  │  ├─ c6
│  │  │  └─ a5c67c067b4f5280138f406e1be86da3c01504
│  │  ├─ ca
│  │  │  └─ 458672434e7eb25ff7da0cac44f3bc158a1493
│  │  ├─ cc
│  │  │  └─ f29b0dece97a40541e914314fd8184730277e3
│  │  ├─ d3
│  │  │  └─ 184d9d8c03d1e725ea43f99c10b970486b0a1b
│  │  ├─ d6
│  │  │  └─ 3d7133582f5c789b19318835a8f6ac2e67928a
│  │  ├─ d7
│  │  │  └─ eb66a8570b0fb52f2e7a4cd7e59af397f3d2d9
│  │  ├─ d8
│  │  │  └─ 38e6d161db06daed6e02e2a083994217bbacb1
│  │  ├─ da
│  │  │  ├─ 4a50999a836969e108f2605da0272e9fe03378
│  │  │  └─ c375052a9eb75bb8c772b08c3f07d37c2b189d
│  │  ├─ db
│  │  │  └─ f7d398912e1df85ec9c39c35d835c6876d34d5
│  │  ├─ dc
│  │  │  └─ 359620cb765b011355c85a3a4d88fbc4f638e0
│  │  ├─ de
│  │  │  └─ 17501bf7537a6f275eedeccfac331d9d7a72c8
│  │  ├─ df
│  │  │  └─ 36fcfb72584e00488330b560ebcf34a41c64c2
│  │  ├─ e0
│  │  │  ├─ ab3ce2358711436e2183d29f0880bb8b061122
│  │  │  └─ d1daf149e03c0425960e3884b5f3c563a5fccb
│  │  ├─ e3
│  │  │  └─ 08d2e3570772511be2d8ea86fe2fa10b769129
│  │  ├─ e8
│  │  │  └─ 8483e4f60491156e09976a0027cac0bf51bee3
│  │  ├─ e9
│  │  │  └─ 558405fdcc02f12d757acb308e02937a7444f1
│  │  ├─ eb
│  │  │  └─ b1c90cca86c5100b8722eb0c02b5dfbd15fa6b
│  │  ├─ ec
│  │  │  └─ eec5d2a7238c5eed094e9eba68891463c99a13
│  │  ├─ ee
│  │  │  └─ b75b7f44195d3bdc8c6ff0fc3c0703391a944a
│  │  ├─ ef
│  │  │  └─ e566c4cf9d914436ff1e67bf13ea50d49311b5
│  │  ├─ f1
│  │  │  └─ 1936a012bdd472acd9671eec86ad4bd1760e30
│  │  ├─ f3
│  │  │  ├─ 5abb8351797ad13f42746694159a1c111a3d6c
│  │  │  ├─ d2503fc2a44b5053b0837ebea6e87a2d339a43
│  │  │  └─ dffe145ef5140ea6072cdb6d0ec9965efc6e89
│  │  ├─ f5
│  │  │  ├─ 320dc1dc7faabeb09ef62da6a62698f0b88bb0
│  │  │  └─ b8a06800d603413a7657856379f06237f0b7c8
│  │  ├─ ff
│  │  │  └─ 5c9da5d6f8362911eaf1e082219e2471ee2a97
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ master
│     ├─ remotes
│     │  └─ origin
│     │     └─ master
│     └─ tags
├─ .gitignore
├─ babel.config.js
├─ jsconfig.json
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  ├─ iconfont.css
│  ├─ index.html
│  └─ reset.css
├─ README.md
├─ src
│  ├─ API
│  │  ├─ index.js
│  │  └─ requests.js
│  ├─ App.vue
│  ├─ assets
│  ├─ components
│  │  ├─ Footer
│  │  │  ├─ Footer.vue
│  │  │  └─ images
│  │  │     └─ wx_cz.jpg
│  │  ├─ Header
│  │  │  ├─ Header.vue
│  │  │  └─ images
│  │  │     └─ logo.png
│  │  └─ TypeNav
│  │     └─ index.vue
│  ├─ main.js
│  ├─ pages
│  │  ├─ Home
│  │  │  ├─ Brand
│  │  │  │  ├─ images
│  │  │  │  │  ├─ brand_03.png
│  │  │  │  │  ├─ brand_05.png
│  │  │  │  │  ├─ brand_07.png
│  │  │  │  │  ├─ brand_09.png
│  │  │  │  │  ├─ brand_11.png
│  │  │  │  │  ├─ brand_13.png
│  │  │  │  │  ├─ brand_15.png
│  │  │  │  │  ├─ brand_17.png
│  │  │  │  │  ├─ brand_19.png
│  │  │  │  │  ├─ brand_21.png
│  │  │  │  │  └─ home.css
│  │  │  │  └─ index.vue
│  │  │  ├─ Floor
│  │  │  │  ├─ images
│  │  │  │  │  ├─ floor-1-1.png
│  │  │  │  │  ├─ floor-1-2.png
│  │  │  │  │  ├─ floor-1-3.png
│  │  │  │  │  ├─ floor-1-4.png
│  │  │  │  │  ├─ floor-1-5.png
│  │  │  │  │  ├─ floor-1-6.png
│  │  │  │  │  ├─ floor-1-b01.png
│  │  │  │  │  ├─ floor-1-b02.png
│  │  │  │  │  ├─ floor-1-b03.png
│  │  │  │  │  └─ home.css
│  │  │  │  └─ index.vue
│  │  │  ├─ Home.vue
│  │  │  ├─ Like
│  │  │  │  ├─ images
│  │  │  │  │  ├─ icons.png
│  │  │  │  │  ├─ like_01.png
│  │  │  │  │  ├─ like_02.png
│  │  │  │  │  └─ like_03.png
│  │  │  │  └─ index.vue
│  │  │  ├─ ListContainer
│  │  │  │  ├─ images
│  │  │  │  │  ├─ ad1.png
│  │  │  │  │  ├─ banner1.jpg
│  │  │  │  │  ├─ banner2.jpg
│  │  │  │  │  ├─ banner3.jpg
│  │  │  │  │  ├─ banner4.jpg
│  │  │  │  │  └─ icons.png
│  │  │  │  └─ index.vue
│  │  │  ├─ Rank
│  │  │  │  ├─ images
│  │  │  │  │  ├─ 1.jpg
│  │  │  │  │  └─ bg0.png
│  │  │  │  └─ index.vue
│  │  │  └─ Recommend
│  │  │     ├─ images
│  │  │     │  ├─ clock.png
│  │  │     │  ├─ today01.png
│  │  │     │  ├─ today02.png
│  │  │     │  ├─ today03.png
│  │  │     │  └─ today04.png
│  │  │     └─ index.vue
│  │  ├─ Login
│  │  │  └─ Login.vue
│  │  ├─ Register
│  │  │  └─ Register.vue
│  │  └─ Search
│  │     └─ Search.vue
│  ├─ router
│  │  └─ router.js
│  └─ store
│     ├─ home
│     │  └─ index.js
│     ├─ index.js
│     └─ search
│        └─ index.js
└─ vue.config.js

```