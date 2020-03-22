# Covid

Una applicazione per monitorare l'andamento dei contagi nella propria provincia, potendolo confrontare con le altre della propria regione.

## Build prod
Se si hanno problemi **causati da Babel** nella build di prod:

```
ng build --prod
```

Eseguire i seguenti passi, come indicato su [GitHub](https://github.com/facebook/create-react-app/issues/8680#issuecomment-601896916)

```
npx npm-force-resolutions
npm install
ng build --prod
```