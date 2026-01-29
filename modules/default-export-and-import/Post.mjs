// Default Post class
export class Post {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }

  publish() {
    console.log(`Title: ${this.title} \n\nContent: ${this.content}`);
  }
}
