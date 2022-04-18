# vue-shopping-cart

## Project setup
Install WSL using on Windows. You will likely need to reboot.

```powershell
wsl.exe --install
```

Once WSL is installed install NodeJS v16. I recommend installing NVM: https://tecadmin.net/how-to-install-nvm-on-ubuntu-20-04/

Then cd to this folder and install the node packages here:

```bash
npm install
```

Lastly install an editor to edit these files like gVim:

```bash
sudo apt install vim-gtk3 -y
```

Then run `gvim` to edit things:

```bash
gvim ./src/App.vue
```

Then you can start your dev server and access the website!

```
npm run serve
```

### Testing with playwright

Install playwright from here:

https://playwright.dev/docs/intro

Make sure to install MSEdge 

```bash
npx playwright install msedge
```

Then run the tests by running:

```bash
npx playwright test
```

Or to see what it's doing: 

```bash
npx playwright test --headed
```