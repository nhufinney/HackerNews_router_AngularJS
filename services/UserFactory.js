hackerNews.factory('UserFactory', function UserFactory(){
    var factory={};
    factory.user=[{email: "liz@gmail.com", password: "liz", status: false }, {email: "nhu@gmail.com", password: "nhu", status: false }, {email: "chitra@gmail.com", password: "chitra", status: false }];


    // var factory={};
    // factory.news=[];
    // factory.addNews=function(){
    //     factory.news.push({articleTitle: this.title, id: this.news.length+1, comments:[], articleContent: this.content, votes:1 });
    //     this.title=null;
    //     this.content=null;
    //
    // }

    return factory;
});
