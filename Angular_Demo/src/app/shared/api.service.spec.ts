import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: ApiService;
  let USERS= [
    {
      "id": 1,
      "name": "Test",
      "email": "test@gmail.com",
      "password": "test123",
      "wishlist": [
        3,
        2,
        1
      ],
      "completed": [
        4,
        1
      ]
    }
  ];

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new ApiService(httpClientSpy);
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });

  describe('getUser()', ()=>{
    it('Should return users when getUser is called', ()=> {
      httpClientSpy.get.and.returnValue(of(USERS));
      service.getUser().subscribe({
        next: (users)=>{
          expect(users).toEqual(USERS);
        },
        error:()=>{
        }
      })
    })
  })
});
