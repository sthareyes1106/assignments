// Default Post class
export class Post {
  constructor(title, content) {
    title;
    content;
  }

  publish() {
    console.log(`Title: ${this.title} \n\nContent: ${this.content}`);
  }
}
