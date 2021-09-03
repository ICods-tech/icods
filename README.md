# **ICODS :: icods-notifications**

## Setup:

After the download of project, follow the steps below:

- Install the dependecies:

```
yarn install
```

- For run the project execute the next command:

```
yarn dev:server
```

## Step for create new modules:

- Create a folder with the name of the module within the path `scr/modules` such as the next struct:
```
-- modules
      |
      |-- infra
        |-- http
          -- controllers
          -- routes
        |-- typeorm
          |-- modules
            -- models
            -- repositories
      |-- irepositories
      |-- dto (if need a new table on database)
      |-- providers (if need)
      |-- services
      |-- validators (if need)
```

- **controllers**: `Class` responsible for receiving the requisition data and calling the service.

- **dtos**: `Interface` responsible for receiving the data that will be provided in the request.

- **models**: `Class` responsible for modeling the data in a database table.

- **providers**: `Method` which will be executed as soon as a request arrives on the route.

- **repositories**: `Interface` which will provide the methods your module repository class will implement, so the application will not depend on `TypeORM` to persist data.

- **routes**: file where the module's routes will be defined, which has functionality as well as providing the routes, such as calling your module's controllers.

- **services**: `Class` which aims to have a single responsibility. Ex.: CreateUser (Create an user).

- **validators**: `Method` responsible for validating the request sent by the client, which must be deprived as `midllewares` in the routes.


**OBS:**
- In order to create an interface and a class in the `repositories` folder within a module, it will be necessary to register the two files so that the` dependency injection` is carried out in the following path `src/shared/container/index.ts` as follows:
```
container.registerSingleton<INomeDaInterfaceRepository>(
  'NomeDaClasseRepository',
  NomeDaClasseRepository,
);
```

- Whenever creating a new module, remember to import the route file in `/src/app/routes/index.ts`, following the standard flow.
