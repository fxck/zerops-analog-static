import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'ng-code-block',
  standalone: true,
  templateUrl: './code-block.component.html',
  styleUrls: ['./code-block.component.css'],
})
export class CodeBlockComponent implements OnInit {  
  showFeedback = false;

  @Input() code: string;

  @ViewChild('codeBlock', { static: true }) codeBlock: ElementRef;

  ngOnInit() {
    setTimeout(() => {
      hljs.highlightBlock(this.codeBlock.nativeElement);
    });
  }

  onCopyToClipboardClick() {
    const codeText = this.codeBlock.nativeElement.innerText;
    navigator.clipboard.writeText(codeText).then(() => {
      this.showFeedback = true;
      setTimeout(() => (this.showFeedback = false), 2000);
    });
  }

  zeropsyaml: string;
  importyaml: string;

  constructor() {
    const importproject = `
project:
  name: recipe-analog
  tags:
    - zerops-recipe

services:
  - hostname: app
    type: static
    enableSubdomainAccess: true
    buildFromGit: https://github.com/zeropsio/recipe-analog-static
    `
        this.importyaml = importproject;

    const zerops = `
zerops:
  - setup: static
    build:
      base: nodejs@20
      buildCommands:
        - pnpm i
        - pnpm build
      deployFiles:
        - public
        - node_modules
        - dist/analog/public/~
    run:
      base: static
`
    
        this.zeropsyaml = zerops;
  }
}
