export class Post 
{

    id : number;

    subject : string;

    description : string;

    author : string;

    city : string;

    constructor(id:number,subject:string,description:string,author:string,city:string)
    {

        this.id = id;
        this.subject = subject;
        this.description = description;
        this.author = author;
        this.city = city;
        
    }

    

}