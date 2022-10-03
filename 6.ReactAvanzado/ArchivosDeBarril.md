
# Archivos de Barril

Para evitar tener que importar los componentes u otros archivos uno por uno\
Se puede **centrarlizar las importaciones** de estos\
Esto mediante archivos de barril, los cuales normalmente **se llaman index.js**\
Y estos se ven como lo siguiente

    export * from './AddCategory';
    export * from './GifGrid';
    export * from './GifItem';

y ahora se pueden hacer importaciones de la siguiente manera

    import { AddCategory, GifGrid } from './components';