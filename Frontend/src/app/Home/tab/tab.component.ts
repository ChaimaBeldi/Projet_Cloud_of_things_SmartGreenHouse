import { Component, OnInit, ViewChild } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { AuthConstants } from '../../../config/auth-constants';
import { AuthService } from '../../services/auth.service';
import { sha256 } from 'js-sha256';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {
  postData = {
    username: '',
    password: '',
    SignInId: '',
  };
  @ViewChild('barChart') barChart;
  @ViewChild('barChart1') barChart1;

  bars: any;
  bars1: any;
  colorArray: any;
  sensordata: any;
  payload;
  profiledata;
  clientId = crypto.getRandomValues(new Uint32Array(1))[0];
  codeVerifier = crypto.getRandomValues(new Uint32Array(10))[0].toString();
  codeChallenge = sha256(this.codeVerifier);
  authorizationCode = '';
  constructor(
    private storageService: StorageService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.storageService.get(AuthConstants.AUTH).then((data) => {
      this.payload = data;
      this.authService.getUserByUsername(data['sub']).subscribe((res: any) => {
        this.profiledata = res[0];
        console.log(this.profiledata);
        console.log('nothing here');
      });
      this.authService.getsensorData().then((data) => {
        this.sensordata = data;
      });
    });
  }
  logout() {
    this.authService.logout();
    this.authService
      .preSignIn(this.clientId, this.codeChallenge)
      .subscribe((res: any) => {
        console.log(this.codeVerifier);
        this.postData.SignInId = res.SignInId;
      });
  }
}
