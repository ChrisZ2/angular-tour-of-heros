import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
      var listHeroes = [];
      for (var i = 0; i<= 100; i++) {
          var id = i;
          var name = "Hero No " + i;
          listHeroes.push({id: id, name: name});
      }
    const heroes = listHeroes;
    return {heroes};
  }
}