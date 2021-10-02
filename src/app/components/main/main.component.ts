import { Component, OnInit } from '@angular/core';
import { CodeBreakerService } from 'src/app/services/code-breaker.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  resp: string = 'XXXX';

  constructor(private codeBreakerService: CodeBreakerService) { }

  ngOnInit(): void {
  }

  guess(code: string): void {
    this.codeBreakerService.guessCode(code).subscribe((resp: any) => {
      this.resp = resp.string;
    });
  }

  reset(): void {
    this.codeBreakerService.resetCode().subscribe(resp => {});
  }

}
