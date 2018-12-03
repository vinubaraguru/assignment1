import { Component, OnInit } from '@angular/core';
import { InsharedService } from '../../services/inshared.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {
  movieDetail: any;

  constructor(private movieService: InsharedService) { }

  ngOnInit() {}

  SearchMovie(formData) {
    this.movieService.getMovieService(formData.searchstring)
      .subscribe(result => {
        this.movieDetail = result;
      })
  }
}
