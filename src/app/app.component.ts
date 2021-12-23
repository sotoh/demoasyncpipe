import { Component } from '@angular/core';
import { BehaviorSubject, from, interval, Observable, of } from 'rxjs';
import { delay, mergeMap, concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'asyncimutable';
  public observabledemo: Observable<Demo[]>;
  public arraygay: Demo[] = [];
  public anotherdemo: Observable<Demo[]>
  private behaviorSub: BehaviorSubject<Demo[]>;
  private myarray = [
    {
      id: 1,
      first_name: 'Alidia',
      last_name: 'Juden',
      email: 'ajuden0@hud.gov',
      gender: 'Agender',
      ip_address: '188.168.138.109',
    },
    {
      id: 2,
      first_name: 'Fowler',
      last_name: 'Ellerker',
      email: 'fellerker1@yolasite.com',
      gender: 'Male',
      ip_address: '168.149.111.194',
    },
    {
      id: 3,
      first_name: 'Cully',
      last_name: 'Lamberton',
      email: 'clamberton2@edublogs.org',
      gender: 'Male',
      ip_address: '64.197.236.131',
    },
    {
      id: 4,
      first_name: 'Juditha',
      last_name: 'Kliemann',
      email: 'jkliemann3@youku.com',
      gender: 'Non-binary',
      ip_address: '244.252.213.12',
    },
    {
      id: 5,
      first_name: 'Alan',
      last_name: 'Porch',
      email: 'aporch4@biblegateway.com',
      gender: 'Male',
      ip_address: '48.236.122.86',
    },
    {
      id: 6,
      first_name: 'Bogart',
      last_name: 'Rulf',
      email: 'brulf5@bluehost.com',
      gender: 'Male',
      ip_address: '148.217.86.151',
    },
    {
      id: 7,
      first_name: 'Gabrielle',
      last_name: 'Kiffe',
      email: 'gkiffe6@scientificamerican.com',
      gender: 'Genderfluid',
      ip_address: '250.157.185.245',
    },
    {
      id: 8,
      first_name: 'Kristoforo',
      last_name: 'Clowser',
      email: 'kclowser7@deviantart.com',
      gender: 'Non-binary',
      ip_address: '176.38.197.232',
    },
    {
      id: 9,
      first_name: 'Rosco',
      last_name: 'Dulin',
      email: 'rdulin8@cam.ac.uk',
      gender: 'Bigender',
      ip_address: '113.92.187.159',
    },
    {
      id: 10,
      first_name: 'Minnnie',
      last_name: 'Eastlake',
      email: 'meastlake9@imageshack.us',
      gender: 'Agender',
      ip_address: '129.220.104.94',
    },
    {
      id: 11,
      first_name: 'Sid',
      last_name: 'Duffrie',
      email: 'sduffriea@army.mil',
      gender: 'Female',
      ip_address: '233.191.37.92',
    },
    {
      id: 12,
      first_name: 'Kim',
      last_name: 'Stelljes',
      email: 'kstelljesb@msn.com',
      gender: 'Male',
      ip_address: '85.8.10.67',
    },
    {
      id: 13,
      first_name: 'Pietro',
      last_name: 'Neilly',
      email: 'pneillyc@uiuc.edu',
      gender: 'Agender',
      ip_address: '161.35.14.66',
    },
    {
      id: 14,
      first_name: 'Ragnar',
      last_name: 'Huntingford',
      email: 'rhuntingfordd@gmpg.org',
      gender: 'Male',
      ip_address: '94.44.180.14',
    },
    {
      id: 15,
      first_name: 'Horacio',
      last_name: 'McArley',
      email: 'hmcarleye@epa.gov',
      gender: 'Non-binary',
      ip_address: '164.229.53.152',
    },
    {
      id: 16,
      first_name: 'Cacilia',
      last_name: 'Zorzini',
      email: 'czorzinif@adobe.com',
      gender: 'Male',
      ip_address: '22.82.213.83',
    },
    {
      id: 17,
      first_name: 'Wilhelmine',
      last_name: 'Matessian',
      email: 'wmatessiang@chicagotribune.com',
      gender: 'Non-binary',
      ip_address: '54.204.118.12',
    },
    {
      id: 18,
      first_name: 'Jareb',
      last_name: 'Climar',
      email: 'jclimarh@theguardian.com',
      gender: 'Non-binary',
      ip_address: '98.160.188.83',
    },
    {
      id: 19,
      first_name: 'Lilia',
      last_name: 'McKeon',
      email: 'lmckeoni@adobe.com',
      gender: 'Genderfluid',
      ip_address: '221.56.153.156',
    },
    {
      id: 20,
      first_name: 'Rudie',
      last_name: 'Kimm',
      email: 'rkimmj@usgs.gov',
      gender: 'Bigender',
      ip_address: '91.102.25.209',
    },
    {
      id: 21,
      first_name: 'Kylen',
      last_name: "O'Connel",
      email: 'koconnelk@cisco.com',
      gender: 'Male',
      ip_address: '183.78.229.58',
    },
    {
      id: 22,
      first_name: 'Davis',
      last_name: 'Johnes',
      email: 'djohnesl@apple.com',
      gender: 'Genderqueer',
      ip_address: '17.29.115.23',
    },
    {
      id: 23,
      first_name: 'Pen',
      last_name: 'Ilbert',
      email: 'pilbertm@tinypic.com',
      gender: 'Agender',
      ip_address: '132.81.69.247',
    },
    {
      id: 24,
      first_name: 'Clarke',
      last_name: 'Pimlott',
      email: 'cpimlottn@myspace.com',
      gender: 'Agender',
      ip_address: '1.137.101.199',
    },
    {
      id: 25,
      first_name: 'Wendi',
      last_name: 'Edds',
      email: 'weddso@samsung.com',
      gender: 'Genderqueer',
      ip_address: '244.219.235.180',
    },
    {
      id: 26,
      first_name: 'Harmonia',
      last_name: 'Padilla',
      email: 'hpadillap@google.com.hk',
      gender: 'Genderfluid',
      ip_address: '136.239.174.51',
    },
    {
      id: 27,
      first_name: 'Izabel',
      last_name: 'MacKain',
      email: 'imackainq@yahoo.co.jp',
      gender: 'Agender',
      ip_address: '187.130.208.196',
    },
    {
      id: 28,
      first_name: 'Ewell',
      last_name: 'Toderi',
      email: 'etoderir@va.gov',
      gender: 'Genderqueer',
      ip_address: '191.218.7.23',
    },
    {
      id: 29,
      first_name: 'Evangelia',
      last_name: 'Karpe',
      email: 'ekarpes@etsy.com',
      gender: 'Genderqueer',
      ip_address: '217.187.103.119',
    },
    {
      id: 30,
      first_name: 'Dwain',
      last_name: 'Spriddle',
      email: 'dspriddlet@phpbb.com',
      gender: 'Genderqueer',
      ip_address: '22.232.49.211',
    },
    {
      id: 31,
      first_name: 'Lethia',
      last_name: 'Pactat',
      email: 'lpactatu@google.es',
      gender: 'Genderqueer',
      ip_address: '192.61.211.182',
    },
    {
      id: 32,
      first_name: 'Elenore',
      last_name: 'Bourchier',
      email: 'ebourchierv@woothemes.com',
      gender: 'Genderfluid',
      ip_address: '51.184.102.28',
    },
    {
      id: 33,
      first_name: 'Vergil',
      last_name: 'Burchatt',
      email: 'vburchattw@xinhuanet.com',
      gender: 'Agender',
      ip_address: '27.239.80.119',
    },
    {
      id: 34,
      first_name: 'Wayland',
      last_name: 'Mont',
      email: 'wmontx@princeton.edu',
      gender: 'Genderqueer',
      ip_address: '37.170.211.250',
    },
    {
      id: 35,
      first_name: 'Zachary',
      last_name: 'Fridlington',
      email: 'zfridlingtony@elpais.com',
      gender: 'Female',
      ip_address: '71.253.176.255',
    },
    {
      id: 36,
      first_name: 'Milicent',
      last_name: 'Galea',
      email: 'mgaleaz@census.gov',
      gender: 'Female',
      ip_address: '22.16.30.193',
    },
    {
      id: 37,
      first_name: 'Chandra',
      last_name: 'Grinaway',
      email: 'cgrinaway10@msn.com',
      gender: 'Agender',
      ip_address: '17.187.250.151',
    },
    {
      id: 38,
      first_name: 'Leeann',
      last_name: 'Rispen',
      email: 'lrispen11@friendfeed.com',
      gender: 'Genderfluid',
      ip_address: '154.189.4.62',
    },
    {
      id: 39,
      first_name: 'Ariella',
      last_name: 'Hoston',
      email: 'ahoston12@rambler.ru',
      gender: 'Polygender',
      ip_address: '233.124.7.94',
    },
    {
      id: 40,
      first_name: 'Pen',
      last_name: 'Bernardelli',
      email: 'pbernardelli13@opensource.org',
      gender: 'Female',
      ip_address: '2.87.216.216',
    },
    {
      id: 41,
      first_name: 'Perri',
      last_name: 'Wharmby',
      email: 'pwharmby14@i2i.jp',
      gender: 'Non-binary',
      ip_address: '182.163.222.225',
    },
    {
      id: 42,
      first_name: 'Vivi',
      last_name: 'Maplesden',
      email: 'vmaplesden15@edublogs.org',
      gender: 'Male',
      ip_address: '244.190.73.30',
    },
    {
      id: 43,
      first_name: 'York',
      last_name: 'Houseley',
      email: 'yhouseley16@cnet.com',
      gender: 'Genderqueer',
      ip_address: '199.32.21.247',
    },
    {
      id: 44,
      first_name: 'Karina',
      last_name: 'Titterrell',
      email: 'ktitterrell17@nifty.com',
      gender: 'Agender',
      ip_address: '41.148.16.107',
    },
    {
      id: 45,
      first_name: 'Krystle',
      last_name: 'Dwelley',
      email: 'kdwelley18@blogs.com',
      gender: 'Genderqueer',
      ip_address: '176.229.78.58',
    },
    {
      id: 46,
      first_name: 'Brucie',
      last_name: 'Van Halle',
      email: 'bvanhalle19@tamu.edu',
      gender: 'Polygender',
      ip_address: '27.233.126.244',
    },
    {
      id: 47,
      first_name: 'Isacco',
      last_name: 'Ewan',
      email: 'iewan1a@economist.com',
      gender: 'Agender',
      ip_address: '91.17.244.214',
    },
    {
      id: 48,
      first_name: 'Portie',
      last_name: 'Guisby',
      email: 'pguisby1b@example.com',
      gender: 'Agender',
      ip_address: '223.171.4.13',
    },
    {
      id: 49,
      first_name: 'Sydel',
      last_name: 'Rossi',
      email: 'srossi1c@jugem.jp',
      gender: 'Genderfluid',
      ip_address: '181.218.108.28',
    },
    {
      id: 50,
      first_name: 'Corly',
      last_name: 'Haselden',
      email: 'chaselden1d@prweb.com',
      gender: 'Male',
      ip_address: '139.133.130.53',
    },
    {
      id: 51,
      first_name: 'Kinnie',
      last_name: 'Knoton',
      email: 'kknoton1e@etsy.com',
      gender: 'Male',
      ip_address: '160.152.74.176',
    },
    {
      id: 52,
      first_name: 'Lorenza',
      last_name: 'Symonds',
      email: 'lsymonds1f@lycos.com',
      gender: 'Polygender',
      ip_address: '114.86.121.232',
    },
    {
      id: 53,
      first_name: 'Claudelle',
      last_name: 'Klaes',
      email: 'cklaes1g@bigcartel.com',
      gender: 'Non-binary',
      ip_address: '107.133.34.143',
    },
    {
      id: 54,
      first_name: 'Nanice',
      last_name: 'Levin',
      email: 'nlevin1h@symantec.com',
      gender: 'Bigender',
      ip_address: '24.46.64.143',
    },
    {
      id: 55,
      first_name: 'Harley',
      last_name: 'Spenceley',
      email: 'hspenceley1i@cam.ac.uk',
      gender: 'Bigender',
      ip_address: '81.155.191.154',
    },
    {
      id: 56,
      first_name: 'Karlee',
      last_name: 'Fassam',
      email: 'kfassam1j@buzzfeed.com',
      gender: 'Polygender',
      ip_address: '185.206.139.115',
    },
    {
      id: 57,
      first_name: 'Hubert',
      last_name: 'Currey',
      email: 'hcurrey1k@home.pl',
      gender: 'Male',
      ip_address: '47.146.25.158',
    },
    {
      id: 58,
      first_name: 'Wilek',
      last_name: 'Larrington',
      email: 'wlarrington1l@theglobeandmail.com',
      gender: 'Genderfluid',
      ip_address: '202.12.104.183',
    },
    {
      id: 59,
      first_name: 'Bernette',
      last_name: 'De Maria',
      email: 'bdemaria1m@jugem.jp',
      gender: 'Polygender',
      ip_address: '0.138.10.110',
    },
    {
      id: 60,
      first_name: 'Konrad',
      last_name: 'Eakin',
      email: 'keakin1n@flickr.com',
      gender: 'Agender',
      ip_address: '161.9.231.69',
    },
    {
      id: 61,
      first_name: 'Martie',
      last_name: 'Pampling',
      email: 'mpampling1o@ucla.edu',
      gender: 'Genderfluid',
      ip_address: '142.214.212.217',
    },
    {
      id: 62,
      first_name: 'Kath',
      last_name: 'Lippini',
      email: 'klippini1p@kickstarter.com',
      gender: 'Bigender',
      ip_address: '21.155.141.226',
    },
    {
      id: 63,
      first_name: 'Belvia',
      last_name: 'Derbyshire',
      email: 'bderbyshire1q@cyberchimps.com',
      gender: 'Non-binary',
      ip_address: '238.13.233.249',
    },
    {
      id: 64,
      first_name: 'Rollie',
      last_name: 'Kleisel',
      email: 'rkleisel1r@ox.ac.uk',
      gender: 'Agender',
      ip_address: '251.35.49.247',
    },
    {
      id: 65,
      first_name: 'Esther',
      last_name: 'Brickhill',
      email: 'ebrickhill1s@yellowbook.com',
      gender: 'Genderqueer',
      ip_address: '98.55.63.182',
    },
    {
      id: 66,
      first_name: 'Fallon',
      last_name: 'Broadnicke',
      email: 'fbroadnicke1t@walmart.com',
      gender: 'Male',
      ip_address: '41.247.253.25',
    },
    {
      id: 67,
      first_name: 'Shela',
      last_name: 'Ambrogio',
      email: 'sambrogio1u@blogtalkradio.com',
      gender: 'Female',
      ip_address: '101.106.229.189',
    },
    {
      id: 68,
      first_name: 'Joellyn',
      last_name: 'Rumble',
      email: 'jrumble1v@theguardian.com',
      gender: 'Genderqueer',
      ip_address: '224.46.221.176',
    },
    {
      id: 69,
      first_name: 'Benoite',
      last_name: 'Hirschmann',
      email: 'bhirschmann1w@twitter.com',
      gender: 'Male',
      ip_address: '30.51.235.150',
    },
    {
      id: 70,
      first_name: 'Hertha',
      last_name: 'Dongate',
      email: 'hdongate1x@merriam-webster.com',
      gender: 'Bigender',
      ip_address: '170.96.15.6',
    },
    {
      id: 71,
      first_name: 'Lemmie',
      last_name: 'Ashbee',
      email: 'lashbee1y@state.gov',
      gender: 'Genderqueer',
      ip_address: '90.116.157.73',
    },
    {
      id: 72,
      first_name: 'Jourdain',
      last_name: 'Schottli',
      email: 'jschottli1z@stumbleupon.com',
      gender: 'Polygender',
      ip_address: '79.7.132.245',
    },
    {
      id: 73,
      first_name: 'Keelby',
      last_name: 'Sima',
      email: 'ksima20@lycos.com',
      gender: 'Polygender',
      ip_address: '32.134.215.198',
    },
    {
      id: 74,
      first_name: 'Rudolf',
      last_name: 'Dimitriou',
      email: 'rdimitriou21@simplemachines.org',
      gender: 'Genderfluid',
      ip_address: '184.196.36.55',
    },
    {
      id: 75,
      first_name: 'Wyndham',
      last_name: 'Teliga',
      email: 'wteliga22@skype.com',
      gender: 'Polygender',
      ip_address: '166.174.133.88',
    },
    {
      id: 76,
      first_name: 'Bendix',
      last_name: 'Lackie',
      email: 'blackie23@yelp.com',
      gender: 'Genderqueer',
      ip_address: '213.226.20.54',
    },
    {
      id: 77,
      first_name: 'Lyle',
      last_name: 'Benda',
      email: 'lbenda24@jigsy.com',
      gender: 'Agender',
      ip_address: '66.29.89.100',
    },
    {
      id: 78,
      first_name: 'Starla',
      last_name: 'Govini',
      email: 'sgovini25@4shared.com',
      gender: 'Male',
      ip_address: '25.76.12.154',
    },
    {
      id: 79,
      first_name: 'Callean',
      last_name: 'Atlay',
      email: 'catlay26@mail.ru',
      gender: 'Polygender',
      ip_address: '61.168.219.94',
    },
    {
      id: 80,
      first_name: 'Joellyn',
      last_name: 'Coushe',
      email: 'jcoushe27@hp.com',
      gender: 'Genderqueer',
      ip_address: '113.97.84.86',
    },
    {
      id: 81,
      first_name: 'Karyn',
      last_name: 'Covelle',
      email: 'kcovelle28@samsung.com',
      gender: 'Agender',
      ip_address: '94.196.141.18',
    },
    {
      id: 82,
      first_name: 'Genia',
      last_name: 'Raffeorty',
      email: 'graffeorty29@ebay.co.uk',
      gender: 'Non-binary',
      ip_address: '80.241.245.224',
    },
    {
      id: 83,
      first_name: 'Debera',
      last_name: 'Patley',
      email: 'dpatley2a@princeton.edu',
      gender: 'Genderfluid',
      ip_address: '210.177.190.181',
    },
    {
      id: 84,
      first_name: 'Oates',
      last_name: 'Guerner',
      email: 'oguerner2b@unicef.org',
      gender: 'Non-binary',
      ip_address: '6.95.152.171',
    },
    {
      id: 85,
      first_name: 'Audrye',
      last_name: 'Doodson',
      email: 'adoodson2c@skype.com',
      gender: 'Genderfluid',
      ip_address: '98.168.3.98',
    },
    {
      id: 86,
      first_name: 'Fernandina',
      last_name: 'Bortolini',
      email: 'fbortolini2d@prnewswire.com',
      gender: 'Female',
      ip_address: '156.64.147.244',
    },
    {
      id: 87,
      first_name: 'Rupert',
      last_name: 'Keaves',
      email: 'rkeaves2e@amazonaws.com',
      gender: 'Genderqueer',
      ip_address: '196.49.248.81',
    },
    {
      id: 88,
      first_name: 'Jacenta',
      last_name: 'Flinders',
      email: 'jflinders2f@booking.com',
      gender: 'Bigender',
      ip_address: '123.26.57.87',
    },
    {
      id: 89,
      first_name: 'Alfy',
      last_name: 'Jannaway',
      email: 'ajannaway2g@google.com.hk',
      gender: 'Polygender',
      ip_address: '228.110.104.109',
    },
    {
      id: 90,
      first_name: 'Kearney',
      last_name: 'Pilkinton',
      email: 'kpilkinton2h@geocities.com',
      gender: 'Genderqueer',
      ip_address: '242.216.89.245',
    },
    {
      id: 91,
      first_name: 'Shadow',
      last_name: 'Beamand',
      email: 'sbeamand2i@npr.org',
      gender: 'Polygender',
      ip_address: '199.190.205.66',
    },
    {
      id: 92,
      first_name: 'Gwendolin',
      last_name: 'Eakly',
      email: 'geakly2j@tripadvisor.com',
      gender: 'Male',
      ip_address: '101.79.31.173',
    },
    {
      id: 93,
      first_name: 'Alic',
      last_name: 'Biset',
      email: 'abiset2k@free.fr',
      gender: 'Bigender',
      ip_address: '178.247.5.246',
    },
    {
      id: 94,
      first_name: 'Lilias',
      last_name: 'Baldin',
      email: 'lbaldin2l@about.com',
      gender: 'Agender',
      ip_address: '222.24.32.119',
    },
    {
      id: 95,
      first_name: 'Brigitta',
      last_name: 'Dalligan',
      email: 'bdalligan2m@cnet.com',
      gender: 'Genderfluid',
      ip_address: '81.85.68.77',
    },
    {
      id: 96,
      first_name: 'Natalina',
      last_name: 'Prestage',
      email: 'nprestage2n@t-online.de',
      gender: 'Genderqueer',
      ip_address: '106.168.105.29',
    },
    {
      id: 97,
      first_name: 'Rana',
      last_name: 'Ebdon',
      email: 'rebdon2o@msu.edu',
      gender: 'Genderqueer',
      ip_address: '92.46.64.212',
    },
    {
      id: 98,
      first_name: 'Allistir',
      last_name: 'Francois',
      email: 'afrancois2p@toplist.cz',
      gender: 'Bigender',
      ip_address: '222.195.110.255',
    },
    {
      id: 99,
      first_name: 'Tammy',
      last_name: 'Sandyford',
      email: 'tsandyford2q@tmall.com',
      gender: 'Female',
      ip_address: '62.26.222.62',
    },
    {
      id: 100,
      first_name: 'Killy',
      last_name: 'Golborne',
      email: 'kgolborne2r@imageshack.us',
      gender: 'Genderfluid',
      ip_address: '197.69.229.166',
    },
  ];
  public source = of(...this.myarray).pipe(
    concatMap((value) => of(value).pipe(delay(2000)))
  );

  constructor() {
    //this.observabledemo = of(this.myarray).pipe(delay(3000));
    this.behaviorSub = new BehaviorSubject<Demo[]>([]);
    this.anotherdemo = this.behaviorSub.asObservable();

    this.observabledemo = of(this.myarray).pipe(
      concatMap((x) => of(x).pipe(delay(4000)))
    );
    this.source.subscribe((val) => {
      this.arraygay.push(val);
      // this.behaviorSub.next([...this.behaviorSub.value].concat(val));
      this.behaviorSub.next(this.arraygay);
    });
  }

  edit(): void {
    this.behaviorSub.value[1].id = 200;
  }
}

interface Demo {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
}
