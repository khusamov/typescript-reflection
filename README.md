# typescript-reflection

Эксперименты с рефлексией для TypeScript.

typescript-rtti-rollup
----------------------

Ура! Это наконец-то работает!
Генерируется код Адаптера для IoC.

tst-reflect-rollup
------------------

И тут ошибка!

```
Uncaught ReferenceError: require is not defined
```

tst-reflect
-----------

https://github.com/Hookyns/tst-reflect

Проект обновляется.

Застрял на ошибке:

```
parcel-transformer-ttypescript: Debug Failure.
```

Создана заявка на исправление ошибки:
https://github.com/Hookyns/tst-reflect/issues/35


typescript-rtti
---------------

https://github.com/typescript-rtti/typescript-rtti

Проект обновляется и автор реагирует на заявки мгновенно.

Застрял на ошибке:

```
ReflectedInterfaceRef
index.ts:30 ReflectedAnyRef
reflect.ts:345 Uncaught TypeError: Type has kind any, expected interface
    at ReflectedAnyRef.as (reflect.ts:345:6)
    at Object.h7u1C.reflect-metadata (index.ts:31:90)
    at newRequire (index.b71e74eb.js:71:24)
    at index.b71e74eb.js:122:5
    at index.b71e74eb.js:145:3
```

Эта ошибка взята автором на исправление:
https://github.com/typescript-rtti/typescript-rtti/issues/36

Но возможно это следствие использования Parcel.

ts-reflection
-------------

https://github.com/janjakubnanista/ts-reflection

Проект два года не обновлялся!

Застрял на ошибке:

```
index.ts:2 Uncaught ReferenceError: propertiesOf is not defined
    at Object.h7u1C.@parcel/transformer-js/src/esmodule-helpers.js (index.ts:2:20)
    at newRequire (index.b71e74eb.js:71:24)
    at index.b71e74eb.js:122:5
    at index.b71e74eb.js:145:3
```