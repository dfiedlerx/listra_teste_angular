import { Component, OnInit } from '@angular/core';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-shared-veiculo-item-favorite',
  templateUrl: './shared-veiculo-item-favorite.component.html',
  styleUrls: ['./shared-veiculo-item-favorite.component.scss']
})
export class SharedVeiculoItemFavoriteComponent implements OnInit {

  faHeartRegular = faHeartRegular;
  faHeartSolid= faHeartSolid;

  checked : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
