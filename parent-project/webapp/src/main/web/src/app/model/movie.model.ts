export class Movie {

  id : string = "";
  name : string = "";
  year : number = 0;
  director : string = "";
  constructor(id : string, name : string ,  year : number ,  director : string) {
    this.id = id;
    this.name = name;
    this.year = year;
    this.director = director;
  }
}
