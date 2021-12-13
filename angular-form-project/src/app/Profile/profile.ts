interface profileinterface{
    firstName:string;
    lastName:string;
    email:string;
    sign:string;
    birthday:Date;
    retrograde:boolean;
}

export class Profile implements profileinterface{
    firstName:string = "";
    lastName:string = "";
    email:string = "";
    sign:string = "";
    birthday:Date = new Date();
    retrograde:boolean = false;

    constructor(allValuesOrFirstName?:profileinterface|string, lastName:string = '', email:string = '', sign:string = '',
                retrograde:boolean = false, birthday?:Date){
        if(typeof allValuesOrFirstName === 'string' || typeof allValuesOrFirstName === 'undefined'){
            this.birthday = birthday ? birthday:new Date();
            this.firstName = typeof allValuesOrFirstName === 'string' ? allValuesOrFirstName:'';
            this.lastName = lastName;
            this.email = email;
            this.sign = sign;
            this.retrograde = retrograde;
        }else{
            console.log(typeof allValuesOrFirstName)
            this.birthday = allValuesOrFirstName!.birthday;
            this.firstName = allValuesOrFirstName!.firstName;
            this.lastName = allValuesOrFirstName!.lastName;
            this.email = allValuesOrFirstName!.email;
            this.sign = allValuesOrFirstName!.sign;
            this.retrograde = allValuesOrFirstName!.retrograde;
        }
    }
}