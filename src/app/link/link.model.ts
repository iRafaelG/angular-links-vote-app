export class Link {

    title: string;
    link: string;
    votes: number;

    // The symbol ? means optional param
    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0; // Since votes param is optional, if it does not receive anything... set it to 0
    }

    voteUp() {
        this.votes++; // this.votes = this.vote + 1
    }

    voteDown() {
        this.votes--;
    }
 }