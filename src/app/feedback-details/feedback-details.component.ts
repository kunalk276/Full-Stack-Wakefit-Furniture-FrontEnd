import { Component, OnInit } from '@angular/core';

import { Feedback } from '../feedback';
import { FeedbackService } from '../feedback.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-feedback-details',
  templateUrl: './feedback-details.component.html',
  styleUrls: ['./feedback-details.component.css']
})
export class FeedbackDetailsComponent implements OnInit {
  feedbackId!:number;
  feedback!: Feedback;
  router: any;
  
  

  constructor(private feedbackService: FeedbackService,private route: ActivatedRoute)
    
   {}

  ngOnInit(): void 
  {
    this.feedbackId=this.route.snapshot.params['feedbackId'];
    this.feedback=new Feedback();
    this.feedbackService.getFeedbackById(this.feedbackId).subscribe(data => {
      this.feedback = data;
    })
  }

  goBack(): void {
    this.router.navigate(['/feedbacks']);
  }
}
