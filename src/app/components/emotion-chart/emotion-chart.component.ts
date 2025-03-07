import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

interface EmotionData {
  timestamp: number;
  emotion_list: { emotion: string; percent: number }[];
}

@Component({
  selector: 'app-emotion-chart',
  templateUrl: './emotion-chart.component.html',
  styleUrls: ['./emotion-chart.component.scss']
})
export class EmotionChartComponent implements OnInit {
  public lineChartType: ChartType = 'line';
  public lineChartData!: ChartData<'line'>;
  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    elements: {
      line: {
        tension: 0 
      },
      
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        align: 'end',
        labels: {
          boxWidth: 12,
          boxHeight: 12,
          usePointStyle: true,
          pointStyle: 'rect'
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
        },
        grid: {
          display: false, 
          drawBorder: false,
          color: '#ddd'
        },
        ticks: {
          stepSize: 2, 
          autoSkip: true, 
          maxRotation: 0, 
          minRotation: 0,
          padding: 10 
        }
      },
      y: {
        title: {
          display: true,
        }
      }
    }
  };

  private jsonData: EmotionData[] = [
    {
        "timestamp": 0.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 52.50485213512659
            },
            {
                "emotion": "confused",
                "percent": 3.6380122894236666
            },
            {
                "emotion": "surprised",
                "percent": 0.0
            },
            {
                "emotion": "neutral",
                "percent": 34.9913913407198
            },
            {
                "emotion": "unhappy",
                "percent": 8.865744234729943
            }
        ]
    },
    {
        "timestamp": 150.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 51.826066958766766
            },
            {
                "emotion": "confused",
                "percent": 3.607980137484521
            },
            {
                "emotion": "surprised",
                "percent": 0.0
            },
            {
                "emotion": "neutral",
                "percent": 36.07111699185829
            },
            {
                "emotion": "unhappy",
                "percent": 8.494835911890414
            }
        ]
    },
    {
        "timestamp": 300.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 51.13589986815564
            },
            {
                "emotion": "confused",
                "percent": 3.583579520239081
            },
            {
                "emotion": "surprised",
                "percent": 0.0
            },
            {
                "emotion": "neutral",
                "percent": 37.14271954472717
            },
            {
                "emotion": "unhappy",
                "percent": 8.137801066878085
            }
        ]
    },
    {
        "timestamp": 450.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 50.44572977972372
            },
            {
                "emotion": "confused",
                "percent": 3.56458761587762
            },
            {
                "emotion": "surprised",
                "percent": 0.0
            },
            {
                "emotion": "neutral",
                "percent": 38.19120285867578
            },
            {
                "emotion": "unhappy",
                "percent": 7.798479745722867
            }
        ]
    },
    {
        "timestamp": 600.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 49.75908263277037
            },
            {
                "emotion": "confused",
                "percent": 3.5432748506941216
            },
            {
                "emotion": "surprised",
                "percent": 0.004781747436833727
            },
            {
                "emotion": "neutral",
                "percent": 39.21067059485456
            },
            {
                "emotion": "unhappy",
                "percent": 7.48219017424411
            }
        ]
    },
    {
        "timestamp": 750.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 49.08347511304677
            },
            {
                "emotion": "confused",
                "percent": 3.499380190132201
            },
            {
                "emotion": "surprised",
                "percent": 0.027678713368277316
            },
            {
                "emotion": "neutral",
                "percent": 40.18509230388116
            },
            {
                "emotion": "unhappy",
                "percent": 7.204373679571606
            }
        ]
    },
    {
        "timestamp": 900.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 48.43432213661181
            },
            {
                "emotion": "confused",
                "percent": 3.4379572232454936
            },
            {
                "emotion": "surprised",
                "percent": 0.06582172709171277
            },
            {
                "emotion": "neutral",
                "percent": 41.09142713473048
            },
            {
                "emotion": "unhappy",
                "percent": 6.970471778320501
            }
        ]
    },
    {
        "timestamp": 1050.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 47.8206920267697
            },
            {
                "emotion": "confused",
                "percent": 3.3643433943895995
            },
            {
                "emotion": "surprised",
                "percent": 0.11612042486897765
            },
            {
                "emotion": "neutral",
                "percent": 41.91560595691861
            },
            {
                "emotion": "unhappy",
                "percent": 6.783238197053132
            }
        ]
    },
    {
        "timestamp": 1200.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 47.246500940448406
            },
            {
                "emotion": "confused",
                "percent": 3.2816266380049024
            },
            {
                "emotion": "surprised",
                "percent": 0.17641376991415
            },
            {
                "emotion": "neutral",
                "percent": 42.653825487216565
            },
            {
                "emotion": "unhappy",
                "percent": 6.64163316441596
            }
        ]
    },
    {
        "timestamp": 1350.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 46.71451932335079
            },
            {
                "emotion": "confused",
                "percent": 3.190937734148895
            },
            {
                "emotion": "surprised",
                "percent": 0.24509457218965372
            },
            {
                "emotion": "neutral",
                "percent": 43.308572879462446
            },
            {
                "emotion": "unhappy",
                "percent": 6.54087549084822
            }
        ]
    },
    {
        "timestamp": 1500.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 46.228947405434795
            },
            {
                "emotion": "confused",
                "percent": 3.092904362987924
            },
            {
                "emotion": "surprised",
                "percent": 0.3209617735176147
            },
            {
                "emotion": "neutral",
                "percent": 43.87959430161325
            },
            {
                "emotion": "unhappy",
                "percent": 6.477592156446407
            }
        ]
    },
    {
        "timestamp": 1650.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 45.77085715475576
            },
            {
                "emotion": "confused",
                "percent": 2.984721860022674
            },
            {
                "emotion": "surprised",
                "percent": 0.4108826513997869
            },
            {
                "emotion": "neutral",
                "percent": 44.35394985856854
            },
            {
                "emotion": "unhappy",
                "percent": 6.479588475253251
            }
        ]
    },
    {
        "timestamp": 1800.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 45.33515300680227
            },
            {
                "emotion": "confused",
                "percent": 2.866038729840844
            },
            {
                "emotion": "surprised",
                "percent": 0.5193054502960143
            },
            {
                "emotion": "neutral",
                "percent": 44.7076229199416
            },
            {
                "emotion": "unhappy",
                "percent": 6.571879893119275
            }
        ]
    },
    {
        "timestamp": 1950.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 44.944460489291046
            },
            {
                "emotion": "confused",
                "percent": 2.739971308418564
            },
            {
                "emotion": "surprised",
                "percent": 0.6418386798546907
            },
            {
                "emotion": "neutral",
                "percent": 44.9269892967811
            },
            {
                "emotion": "unhappy",
                "percent": 6.746740225654618
            }
        ]
    },
    {
        "timestamp": 2100.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 44.61921244530871
            },
            {
                "emotion": "confused",
                "percent": 2.609314535731649
            },
            {
                "emotion": "surprised",
                "percent": 0.774487117160914
            },
            {
                "emotion": "neutral",
                "percent": 45.0
            },
            {
                "emotion": "unhappy",
                "percent": 6.996985901798738
            }
        ]
    },
    {
        "timestamp": 2250.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 44.37358597601401
            },
            {
                "emotion": "confused",
                "percent": 2.4788271411736487
            },
            {
                "emotion": "surprised",
                "percent": 0.9126756778989868
            },
            {
                "emotion": "neutral",
                "percent": 44.91890297087511
            },
            {
                "emotion": "unhappy",
                "percent": 7.31600823403828
            }
        ]
    },
    {
        "timestamp": 2400.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 44.21928959608756
            },
            {
                "emotion": "confused",
                "percent": 2.3551606229835014
            },
            {
                "emotion": "surprised",
                "percent": 1.0508827028823164
            },
            {
                "emotion": "neutral",
                "percent": 44.6780943058518
            },
            {
                "emotion": "unhappy",
                "percent": 7.696572772194732
            }
        ]
    },
    {
        "timestamp": 2550.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 44.1670129539105
            },
            {
                "emotion": "confused",
                "percent": 2.244389076011259
            },
            {
                "emotion": "surprised",
                "percent": 1.1840549128873583
            },
            {
                "emotion": "neutral",
                "percent": 44.27383395411297
            },
            {
                "emotion": "unhappy",
                "percent": 8.130709103077919
            }
        ]
    },
    {
        "timestamp": 2700.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 44.180594296171925
            },
            {
                "emotion": "confused",
                "percent": 2.139559633387494
            },
            {
                "emotion": "surprised",
                "percent": 1.3202779371476108
            },
            {
                "emotion": "neutral",
                "percent": 43.74019265744313
            },
            {
                "emotion": "unhappy",
                "percent": 8.619375475849848
            }
        ]
    },
    {
        "timestamp": 2850.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 44.2368533590733
            },
            {
                "emotion": "confused",
                "percent": 2.0416402529596622
            },
            {
                "emotion": "surprised",
                "percent": 1.4579859563187887
            },
            {
                "emotion": "neutral",
                "percent": 43.117982745098814
            },
            {
                "emotion": "unhappy",
                "percent": 9.145537686549426
            }
        ]
    },
    {
        "timestamp": 3000.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 44.32613870283281
            },
            {
                "emotion": "confused",
                "percent": 1.9550875658498144
            },
            {
                "emotion": "surprised",
                "percent": 1.591688390041299
            },
            {
                "emotion": "neutral",
                "percent": 42.43886331422104
            },
            {
                "emotion": "unhappy",
                "percent": 9.68822202705503
            }
        ]
    },
    {
        "timestamp": 3150.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 44.44077658456946
            },
            {
                "emotion": "confused",
                "percent": 1.8833273229655172
            },
            {
                "emotion": "surprised",
                "percent": 1.7166467773823664
            },
            {
                "emotion": "neutral",
                "percent": 41.73087379063301
            },
            {
                "emotion": "unhappy",
                "percent": 10.228375524449646
            }
        ]
    },
    {
        "timestamp": 3300.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 44.579789718143786
            },
            {
                "emotion": "confused",
                "percent": 1.8271700922404266
            },
            {
                "emotion": "surprised",
                "percent": 1.8290331257272894
            },
            {
                "emotion": "neutral",
                "percent": 41.017797032479564
            },
            {
                "emotion": "unhappy",
                "percent": 10.746210031408934
            }
        ]
    },
    {
        "timestamp": 3450.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 44.7435321435371
            },
            {
                "emotion": "confused",
                "percent": 1.78707395388263
            },
            {
                "emotion": "surprised",
                "percent": 1.92476754023425
            },
            {
                "emotion": "neutral",
                "percent": 40.32490076603935
            },
            {
                "emotion": "unhappy",
                "percent": 11.219725596306667
            }
        ]
    },
    {
        "timestamp": 3600.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 44.92772291953888
            },
            {
                "emotion": "confused",
                "percent": 1.763704648266752
            },
            {
                "emotion": "surprised",
                "percent": 2.003910583086685
            },
            {
                "emotion": "neutral",
                "percent": 39.66548123830823
            },
            {
                "emotion": "unhappy",
                "percent": 11.63918061079945
            }
        ]
    },
    {
        "timestamp": 3750.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 45.117600494880996
            },
            {
                "emotion": "confused",
                "percent": 1.7572328193322009
            },
            {
                "emotion": "surprised",
                "percent": 2.077391179790242
            },
            {
                "emotion": "neutral",
                "percent": 39.016369846510884
            },
            {
                "emotion": "unhappy",
                "percent": 12.031405659485692
            }
        ]
    },
    {
        "timestamp": 3900.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 45.309857419454595
            },
            {
                "emotion": "confused",
                "percent": 1.7670489852705407
            },
            {
                "emotion": "surprised",
                "percent": 2.143591229201495
            },
            {
                "emotion": "neutral",
                "percent": 38.39177452649072
            },
            {
                "emotion": "unhappy",
                "percent": 12.387727839582626
            }
        ]
    },
    {
        "timestamp": 4050.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 45.5028265508853
            },
            {
                "emotion": "confused",
                "percent": 1.79255735318559
            },
            {
                "emotion": "surprised",
                "percent": 2.2000480597053107
            },
            {
                "emotion": "neutral",
                "percent": 37.807027196095035
            },
            {
                "emotion": "unhappy",
                "percent": 12.697540840128765
            }
        ]
    },
    {
        "timestamp": 4200.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 45.69100783324227
            },
            {
                "emotion": "confused",
                "percent": 1.8336663340981834
            },
            {
                "emotion": "surprised",
                "percent": 2.244448210095672
            },
            {
                "emotion": "neutral",
                "percent": 37.27937267812935
            },
            {
                "emotion": "unhappy",
                "percent": 12.951504944434554
            }
        ]
    },
    {
        "timestamp": 4350.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 45.86197731660946
            },
            {
                "emotion": "confused",
                "percent": 1.8909314557938004
            },
            {
                "emotion": "surprised",
                "percent": 2.274419752086719
            },
            {
                "emotion": "neutral",
                "percent": 36.83197946825568
            },
            {
                "emotion": "unhappy",
                "percent": 13.140692007254357
            }
        ]
    },
    {
        "timestamp": 4500.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 46.00185232145376
            },
            {
                "emotion": "confused",
                "percent": 1.9648057136246035
            },
            {
                "emotion": "surprised",
                "percent": 2.2873857561599853
            },
            {
                "emotion": "neutral",
                "percent": 36.49084900639863
            },
            {
                "emotion": "unhappy",
                "percent": 13.255107202362993
            }
        ]
    },
    {
        "timestamp": 4650.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 46.10243723290324
            },
            {
                "emotion": "confused",
                "percent": 2.0458264355953535
            },
            {
                "emotion": "surprised",
                "percent": 2.2824062239149576
            },
            {
                "emotion": "neutral",
                "percent": 36.26806681965083
            },
            {
                "emotion": "unhappy",
                "percent": 13.301263287935631
            }
        ]
    },
    {
        "timestamp": 4800.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 46.163517787326505
            },
            {
                "emotion": "confused",
                "percent": 2.12238317509903
            },
            {
                "emotion": "surprised",
                "percent": 2.2616329633799372
            },
            {
                "emotion": "neutral",
                "percent": 36.15993296948268
            },
            {
                "emotion": "unhappy",
                "percent": 13.292533104711854
            }
        ]
    },
    {
        "timestamp": 4950.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 46.18281413839961
            },
            {
                "emotion": "confused",
                "percent": 2.191684261478293
            },
            {
                "emotion": "surprised",
                "percent": 2.2270183221943314
            },
            {
                "emotion": "neutral",
                "percent": 36.16972332369431
            },
            {
                "emotion": "unhappy",
                "percent": 13.228759954233482
            }
        ]
    },
    {
        "timestamp": 5100.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 46.15872137537588
            },
            {
                "emotion": "confused",
                "percent": 2.251124477311857
            },
            {
                "emotion": "surprised",
                "percent": 2.180347798161884
            },
            {
                "emotion": "neutral",
                "percent": 36.30026104920448
            },
            {
                "emotion": "unhappy",
                "percent": 13.109545299945875
            }
        ]
    },
    {
        "timestamp": 5250.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 46.09577421089753
            },
            {
                "emotion": "confused",
                "percent": 2.298115194061189
            },
            {
                "emotion": "surprised",
                "percent": 2.123339443056535
            },
            {
                "emotion": "neutral",
                "percent": 36.54564694464034
            },
            {
                "emotion": "unhappy",
                "percent": 12.93712420734446
            }
        ]
    },
    {
        "timestamp": 5400.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 46.001978581513455
            },
            {
                "emotion": "confused",
                "percent": 2.329816662942375
            },
            {
                "emotion": "surprised",
                "percent": 2.057944887996043
            },
            {
                "emotion": "neutral",
                "percent": 36.89397214048634
            },
            {
                "emotion": "unhappy",
                "percent": 12.716287727061717
            }
        ]
    },
    {
        "timestamp": 5550.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 45.88484208259044
            },
            {
                "emotion": "confused",
                "percent": 2.3465801355546296
            },
            {
                "emotion": "surprised",
                "percent": 1.9865133253949225
            },
            {
                "emotion": "neutral",
                "percent": 37.3231397406401
            },
            {
                "emotion": "unhappy",
                "percent": 12.458924715819904
            }
        ]
    },
    {
        "timestamp": 5700.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 45.71427913717456
            },
            {
                "emotion": "confused",
                "percent": 2.389540575499275
            },
            {
                "emotion": "surprised",
                "percent": 1.9122598263992485
            },
            {
                "emotion": "neutral",
                "percent": 37.73484060889771
            },
            {
                "emotion": "unhappy",
                "percent": 12.249079852029206
            }
        ]
    },
    {
        "timestamp": 5850.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 45.48413618366079
            },
            {
                "emotion": "confused",
                "percent": 2.4676821677527387
            },
            {
                "emotion": "surprised",
                "percent": 1.8372621379475915
            },
            {
                "emotion": "neutral",
                "percent": 38.09773219030133
            },
            {
                "emotion": "unhappy",
                "percent": 12.11318732033753
            }
        ]
    },
    {
        "timestamp": 6000.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 45.20231996272066
            },
            {
                "emotion": "confused",
                "percent": 2.5761885891862475
            },
            {
                "emotion": "surprised",
                "percent": 1.763055317673184
            },
            {
                "emotion": "neutral",
                "percent": 38.405825208740296
            },
            {
                "emotion": "unhappy",
                "percent": 12.052610921679612
            }
        ]
    },
    {
        "timestamp": 6150.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 44.87563929531562
            },
            {
                "emotion": "confused",
                "percent": 2.710471079746412
            },
            {
                "emotion": "surprised",
                "percent": 1.6911635138724963
            },
            {
                "emotion": "neutral",
                "percent": 38.65502563727604
            },
            {
                "emotion": "unhappy",
                "percent": 12.067700473789426
            }
        ]
    },
    {
        "timestamp": 6300.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 44.510663776688176
            },
            {
                "emotion": "confused",
                "percent": 2.865624824755257
            },
            {
                "emotion": "surprised",
                "percent": 1.6240754651072369
            },
            {
                "emotion": "neutral",
                "percent": 38.843915692187736
            },
            {
                "emotion": "unhappy",
                "percent": 12.155720241261587
            }
        ]
    },
    {
        "timestamp": 6450.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 44.115591477196716
            },
            {
                "emotion": "confused",
                "percent": 3.035972833615857
            },
            {
                "emotion": "surprised",
                "percent": 1.5648907953650082
            },
            {
                "emotion": "neutral",
                "percent": 38.970550524706084
            },
            {
                "emotion": "unhappy",
                "percent": 12.312994369116334
            }
        ]
    },
    {
        "timestamp": 6600.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 43.71491131354554
            },
            {
                "emotion": "confused",
                "percent": 3.219936209781868
            },
            {
                "emotion": "surprised",
                "percent": 1.517175984189869
            },
            {
                "emotion": "neutral",
                "percent": 39.00243215224383
            },
            {
                "emotion": "unhappy",
                "percent": 12.545544340238877
            }
        ]
    },
    {
        "timestamp": 6750.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 43.3533415113922
            },
            {
                "emotion": "confused",
                "percent": 3.426520493936483
            },
            {
                "emotion": "surprised",
                "percent": 1.4840485585983407
            },
            {
                "emotion": "neutral",
                "percent": 38.85750050478107
            },
            {
                "emotion": "unhappy",
                "percent": 12.878588931291883
            }
        ]
    },
    {
        "timestamp": 6900.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 43.04603698068996
            },
            {
                "emotion": "confused",
                "percent": 3.649619918900103
            },
            {
                "emotion": "surprised",
                "percent": 1.467121302369752
            },
            {
                "emotion": "neutral",
                "percent": 38.535986221377215
            },
            {
                "emotion": "unhappy",
                "percent": 13.301235576662949
            }
        ]
    },
    {
        "timestamp": 7050.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 42.80535414262193
            },
            {
                "emotion": "confused",
                "percent": 3.882507678094018
            },
            {
                "emotion": "surprised",
                "percent": 1.4678119285586033
            },
            {
                "emotion": "neutral",
                "percent": 38.04355463946882
            },
            {
                "emotion": "unhappy",
                "percent": 13.800771611256648
            }
        ]
    },
    {
        "timestamp": 7200.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 42.64120974050075
            },
            {
                "emotion": "confused",
                "percent": 4.117965146353507
            },
            {
                "emotion": "surprised",
                "percent": 1.4864446626692653
            },
            {
                "emotion": "neutral",
                "percent": 37.39159324405787
            },
            {
                "emotion": "unhappy",
                "percent": 14.362787206418595
            }
        ]
    },
    {
        "timestamp": 7350.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 42.56138785498004
            },
            {
                "emotion": "confused",
                "percent": 4.346725980801863
            },
            {
                "emotion": "surprised",
                "percent": 1.5216696034831487
            },
            {
                "emotion": "neutral",
                "percent": 36.6025695245507
            },
            {
                "emotion": "unhappy",
                "percent": 14.967647036184243
            }
        ]
    },
    {
        "timestamp": 7500.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 42.57388379616626
            },
            {
                "emotion": "confused",
                "percent": 4.558305866678204
            },
            {
                "emotion": "surprised",
                "percent": 1.5718296091993809
            },
            {
                "emotion": "neutral",
                "percent": 35.70343100469832
            },
            {
                "emotion": "unhappy",
                "percent": 15.592549723257857
            }
        ]
    },
    {
        "timestamp": 7650.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 42.652531580794914
            },
            {
                "emotion": "confused",
                "percent": 4.752964631292646
            },
            {
                "emotion": "surprised",
                "percent": 1.634887893630953
            },
            {
                "emotion": "neutral",
                "percent": 34.75618458680795
            },
            {
                "emotion": "unhappy",
                "percent": 16.20343130747354
            }
        ]
    },
    {
        "timestamp": 7800.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 42.76269203380559
            },
            {
                "emotion": "confused",
                "percent": 4.932821742741069
            },
            {
                "emotion": "surprised",
                "percent": 1.707628573041693
            },
            {
                "emotion": "neutral",
                "percent": 33.829402366610125
            },
            {
                "emotion": "unhappy",
                "percent": 16.76745528380154
            }
        ]
    },
    {
        "timestamp": 7950.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 42.899312492957115
            },
            {
                "emotion": "confused",
                "percent": 5.090187270085947
            },
            {
                "emotion": "surprised",
                "percent": 1.786610832647003
            },
            {
                "emotion": "neutral",
                "percent": 32.96024323406519
            },
            {
                "emotion": "unhappy",
                "percent": 17.263646170244776
            }
        ]
    },
    {
        "timestamp": 8100.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 43.05813835046829
            },
            {
                "emotion": "confused",
                "percent": 5.218347360832703
            },
            {
                "emotion": "surprised",
                "percent": 1.8687848666806146
            },
            {
                "emotion": "neutral",
                "percent": 32.180899674176345
            },
            {
                "emotion": "unhappy",
                "percent": 17.673829747842053
            }
        ]
    },
    {
        "timestamp": 8250.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 43.23532370096615
            },
            {
                "emotion": "confused",
                "percent": 5.31337547357102
            },
            {
                "emotion": "surprised",
                "percent": 1.9520115626638574
            },
            {
                "emotion": "neutral",
                "percent": 31.51345472441423
            },
            {
                "emotion": "unhappy",
                "percent": 17.985834538384783
            }
        ]
    },
    {
        "timestamp": 8400.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 43.425789555623666
            },
            {
                "emotion": "confused",
                "percent": 5.372709285335968
            },
            {
                "emotion": "surprised",
                "percent": 2.0344316344180426
            },
            {
                "emotion": "neutral",
                "percent": 30.977066507182485
            },
            {
                "emotion": "unhappy",
                "percent": 18.190003017439782
            }
        ]
    },
    {
        "timestamp": 8550.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 43.62783809162042
            },
            {
                "emotion": "confused",
                "percent": 5.394680783230864
            },
            {
                "emotion": "surprised",
                "percent": 2.112681074488198
            },
            {
                "emotion": "neutral",
                "percent": 30.585603953185924
            },
            {
                "emotion": "unhappy",
                "percent": 18.279196097474582
            }
        ]
    },
    {
        "timestamp": 8700.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 43.860143915289676
            },
            {
                "emotion": "confused",
                "percent": 5.391814671190385
            },
            {
                "emotion": "surprised",
                "percent": 2.1694259149943
            },
            {
                "emotion": "neutral",
                "percent": 30.29054851239485
            },
            {
                "emotion": "unhappy",
                "percent": 18.288066986130776
            }
        ]
    },
    {
        "timestamp": 8850.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 44.11501031585886
            },
            {
                "emotion": "confused",
                "percent": 5.3696803842979985
            },
            {
                "emotion": "surprised",
                "percent": 2.1997786732538906
            },
            {
                "emotion": "neutral",
                "percent": 30.084900742482077
            },
            {
                "emotion": "unhappy",
                "percent": 18.23062988410716
            }
        ]
    },
    {
        "timestamp": 9000.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 44.37966454985609
            },
            {
                "emotion": "confused",
                "percent": 5.329862208185636
            },
            {
                "emotion": "surprised",
                "percent": 2.204136100503282
            },
            {
                "emotion": "neutral",
                "percent": 29.977093500386232
            },
            {
                "emotion": "unhappy",
                "percent": 18.109243641068772
            }
        ]
    },
    {
        "timestamp": 9150.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 44.64346477788654
            },
            {
                "emotion": "confused",
                "percent": 5.273532411744741
            },
            {
                "emotion": "surprised",
                "percent": 2.182969650600355
            },
            {
                "emotion": "neutral",
                "percent": 29.97405874836423
            },
            {
                "emotion": "unhappy",
                "percent": 17.92597441140413
            }
        ]
    },
    {
        "timestamp": 9300.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 44.89690766074348
            },
            {
                "emotion": "confused",
                "percent": 5.20115849163336
            },
            {
                "emotion": "surprised",
                "percent": 2.1369536415570707
            },
            {
                "emotion": "neutral",
                "percent": 30.080503797580192
            },
            {
                "emotion": "unhappy",
                "percent": 17.684476408485896
            }
        ]
    },
    {
        "timestamp": 9450.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 45.129665677392374
            },
            {
                "emotion": "confused",
                "percent": 5.11324273000471
            },
            {
                "emotion": "surprised",
                "percent": 2.066872829713252
            },
            {
                "emotion": "neutral",
                "percent": 30.300765033297097
            },
            {
                "emotion": "unhappy",
                "percent": 17.389453729592567
            }
        ]
    },
    {
        "timestamp": 9600.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 45.34661546998654
            },
            {
                "emotion": "confused",
                "percent": 5.0146177966983485
            },
            {
                "emotion": "surprised",
                "percent": 1.9736756055952376
            },
            {
                "emotion": "neutral",
                "percent": 30.611155289610764
            },
            {
                "emotion": "unhappy",
                "percent": 17.053935838109112
            }
        ]
    },
    {
        "timestamp": 9750.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 45.57520097765832
            },
            {
                "emotion": "confused",
                "percent": 4.920680882697476
            },
            {
                "emotion": "surprised",
                "percent": 1.8603494441486617
            },
            {
                "emotion": "neutral",
                "percent": 30.930811924431794
            },
            {
                "emotion": "unhappy",
                "percent": 16.71295677106374
            }
        ]
    },
    {
        "timestamp": 9900.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 45.809207867929175
            },
            {
                "emotion": "confused",
                "percent": 4.835836031709505
            },
            {
                "emotion": "surprised",
                "percent": 1.7319420702942105
            },
            {
                "emotion": "neutral",
                "percent": 31.23937554187812
            },
            {
                "emotion": "unhappy",
                "percent": 16.383638488189
            }
        ]
    },
    {
        "timestamp": 10050.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 46.04165886577157
            },
            {
                "emotion": "confused",
                "percent": 4.763049141595131
            },
            {
                "emotion": "surprised",
                "percent": 1.5929500861275032
            },
            {
                "emotion": "neutral",
                "percent": 31.522760362108258
            },
            {
                "emotion": "unhappy",
                "percent": 16.079581544397566
            }
        ]
    },
    {
        "timestamp": 10200.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 46.26605566155442
            },
            {
                "emotion": "confused",
                "percent": 4.704857342565715
            },
            {
                "emotion": "surprised",
                "percent": 1.4477724452714498
            },
            {
                "emotion": "neutral",
                "percent": 31.770060472727423
            },
            {
                "emotion": "unhappy",
                "percent": 15.811254077880994
            }
        ]
    },
    {
        "timestamp": 10350.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 46.473595115251186
            },
            {
                "emotion": "confused",
                "percent": 4.663851091617347
            },
            {
                "emotion": "surprised",
                "percent": 1.3017353633668087
            },
            {
                "emotion": "neutral",
                "percent": 31.973653984741105
            },
            {
                "emotion": "unhappy",
                "percent": 15.587164445023546
            }
        ]
    },
    {
        "timestamp": 10500.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 46.65493072958175
            },
            {
                "emotion": "confused",
                "percent": 4.642848340278719
            },
            {
                "emotion": "surprised",
                "percent": 1.1607120850696797
            },
            {
                "emotion": "neutral",
                "percent": 32.12487140747771
            },
            {
                "emotion": "unhappy",
                "percent": 15.41663743759216
            }
        ]
    },
    {
        "timestamp": 10650.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 46.868757906593906
            },
            {
                "emotion": "confused",
                "percent": 4.633400773101899
            },
            {
                "emotion": "surprised",
                "percent": 1.0207799689222876
            },
            {
                "emotion": "neutral",
                "percent": 32.230125189616345
            },
            {
                "emotion": "unhappy",
                "percent": 15.24693616176557
            }
        ]
    },
    {
        "timestamp": 10800.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 47.16030019955025
            },
            {
                "emotion": "confused",
                "percent": 4.625328438747439
            },
            {
                "emotion": "surprised",
                "percent": 0.878056131804899
            },
            {
                "emotion": "neutral",
                "percent": 32.30899819102427
            },
            {
                "emotion": "unhappy",
                "percent": 15.027317038873141
            }
        ]
    },
    {
        "timestamp": 10950.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 47.510765364186724
            },
            {
                "emotion": "confused",
                "percent": 4.618926096255422
            },
            {
                "emotion": "surprised",
                "percent": 0.738326862286295
            },
            {
                "emotion": "neutral",
                "percent": 32.36202051229944
            },
            {
                "emotion": "unhappy",
                "percent": 14.76996116497213
            }
        ]
    },
    {
        "timestamp": 11100.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 47.903542149388805
            },
            {
                "emotion": "confused",
                "percent": 4.614424038365615
            },
            {
                "emotion": "surprised",
                "percent": 0.6066518819103089
            },
            {
                "emotion": "neutral",
                "percent": 32.38959208889001
            },
            {
                "emotion": "unhappy",
                "percent": 14.485789841445262
            }
        ]
    },
    {
        "timestamp": 11250.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 48.32510861917953
            },
            {
                "emotion": "confused",
                "percent": 4.61193306675167
            },
            {
                "emotion": "surprised",
                "percent": 0.48702013184897636
            },
            {
                "emotion": "neutral",
                "percent": 32.38963206889173
            },
            {
                "emotion": "unhappy",
                "percent": 14.186306113328136
            }
        ]
    },
    {
        "timestamp": 11400.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 48.761526913913045
            },
            {
                "emotion": "confused",
                "percent": 4.611596142680506
            },
            {
                "emotion": "surprised",
                "percent": 0.38334417478053134
            },
            {
                "emotion": "neutral",
                "percent": 32.35862471982982
            },
            {
                "emotion": "unhappy",
                "percent": 13.884908048796047
            }
        ]
    },
    {
        "timestamp": 11550.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 49.20514730124475
            },
            {
                "emotion": "confused",
                "percent": 4.613425172413484
            },
            {
                "emotion": "surprised",
                "percent": 0.2988994682705109
            },
            {
                "emotion": "neutral",
                "percent": 32.29005403906062
            },
            {
                "emotion": "unhappy",
                "percent": 13.592474019010643
            }
        ]
    },
    {
        "timestamp": 11700.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 49.71661862542696
            },
            {
                "emotion": "confused",
                "percent": 4.615575981796331
            },
            {
                "emotion": "surprised",
                "percent": 0.22318941331911354
            },
            {
                "emotion": "neutral",
                "percent": 32.17004733516208
            },
            {
                "emotion": "unhappy",
                "percent": 13.274568644295506
            }
        ]
    },
    {
        "timestamp": 11850.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 50.2955245165892
            },
            {
                "emotion": "confused",
                "percent": 4.617416768276062
            },
            {
                "emotion": "surprised",
                "percent": 0.15467956448538486
            },
            {
                "emotion": "neutral",
                "percent": 32.00380706206951
            },
            {
                "emotion": "unhappy",
                "percent": 12.928572088579807
            }
        ]
    },
    {
        "timestamp": 12000.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 50.92110052489264
            },
            {
                "emotion": "confused",
                "percent": 4.6189122479692255
            },
            {
                "emotion": "surprised",
                "percent": 0.09591990291309883
            },
            {
                "emotion": "neutral",
                "percent": 31.79856004260907
            },
            {
                "emotion": "unhappy",
                "percent": 12.565507281615957
            }
        ]
    },
    {
        "timestamp": 12150.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 51.574100624488075
            },
            {
                "emotion": "confused",
                "percent": 4.6199857999396325
            },
            {
                "emotion": "surprised",
                "percent": 0.04921540962900553
            },
            {
                "emotion": "neutral",
                "percent": 31.561379621223082
            },
            {
                "emotion": "unhappy",
                "percent": 12.195318544720184
            }
        ]
    },
    {
        "timestamp": 12300.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 52.229839169556215
            },
            {
                "emotion": "confused",
                "percent": 4.6206222973467845
            },
            {
                "emotion": "surprised",
                "percent": 0.01680484494988327
            },
            {
                "emotion": "neutral",
                "percent": 31.3028329073004
            },
            {
                "emotion": "unhappy",
                "percent": 11.82990078084672
            }
        ]
    },
    {
        "timestamp": 12450.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 52.859440759923416
            },
            {
                "emotion": "confused",
                "percent": 4.620852183756774
            },
            {
                "emotion": "surprised",
                "percent": 0.0010958730036984585
            },
            {
                "emotion": "neutral",
                "percent": 31.035431868589285
            },
            {
                "emotion": "unhappy",
                "percent": 11.483179314726804
            }
        ]
    },
    {
        "timestamp": 12600.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 53.44855136561653
            },
            {
                "emotion": "confused",
                "percent": 4.61620951505489
            },
            {
                "emotion": "surprised",
                "percent": 0.0
            },
            {
                "emotion": "neutral",
                "percent": 30.787004017597994
            },
            {
                "emotion": "unhappy",
                "percent": 11.148235101730576
            }
        ]
    },
    {
        "timestamp": 12750.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 54.02437882147953
            },
            {
                "emotion": "confused",
                "percent": 4.593258696435671
            },
            {
                "emotion": "surprised",
                "percent": 0.0
            },
            {
                "emotion": "neutral",
                "percent": 30.6105611143374
            },
            {
                "emotion": "unhappy",
                "percent": 10.771801367747372
            }
        ]
    },
    {
        "timestamp": 12900.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 54.56851281283154
            },
            {
                "emotion": "confused",
                "percent": 4.553400989020141
            },
            {
                "emotion": "surprised",
                "percent": 0.0
            },
            {
                "emotion": "neutral",
                "percent": 30.50781459685855
            },
            {
                "emotion": "unhappy",
                "percent": 10.370271601289753
            }
        ]
    },
    {
        "timestamp": 13050.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 55.06107911786309
            },
            {
                "emotion": "confused",
                "percent": 4.499083658661351
            },
            {
                "emotion": "surprised",
                "percent": 0.0
            },
            {
                "emotion": "neutral",
                "percent": 30.47584122185745
            },
            {
                "emotion": "unhappy",
                "percent": 9.963996001618137
            }
        ]
    },
    {
        "timestamp": 13200.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 55.48765436575684
            },
            {
                "emotion": "confused",
                "percent": 4.432585949543492
            },
            {
                "emotion": "surprised",
                "percent": 0.0
            },
            {
                "emotion": "neutral",
                "percent": 30.510308236022453
            },
            {
                "emotion": "unhappy",
                "percent": 9.569451448677228
            }
        ]
    },
    {
        "timestamp": 13350.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 55.83619900501765
            },
            {
                "emotion": "confused",
                "percent": 4.356444859272979
            },
            {
                "emotion": "surprised",
                "percent": 0.0
            },
            {
                "emotion": "neutral",
                "percent": 30.607117403480444
            },
            {
                "emotion": "unhappy",
                "percent": 9.200238732228936
            }
        ]
    },
    {
        "timestamp": 13500.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 56.093683774882294
            },
            {
                "emotion": "confused",
                "percent": 4.2734962499988525
            },
            {
                "emotion": "surprised",
                "percent": 0.0
            },
            {
                "emotion": "neutral",
                "percent": 30.76163120787986
            },
            {
                "emotion": "unhappy",
                "percent": 8.871188767238998
            }
        ]
    },
    {
        "timestamp": 13650.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 56.270214837267034
            },
            {
                "emotion": "confused",
                "percent": 4.177318084687878
            },
            {
                "emotion": "surprised",
                "percent": 0.0
            },
            {
                "emotion": "neutral",
                "percent": 30.975685703475747
            },
            {
                "emotion": "unhappy",
                "percent": 8.576781374569357
            }
        ]
    },
    {
        "timestamp": 13800.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 56.375983640834896
            },
            {
                "emotion": "confused",
                "percent": 4.062767743307434
            },
            {
                "emotion": "surprised",
                "percent": 0.0
            },
            {
                "emotion": "neutral",
                "percent": 31.25668386050799
            },
            {
                "emotion": "unhappy",
                "percent": 8.304564755349697
            }
        ]
    },
    {
        "timestamp": 13950.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 56.40821496794187
            },
            {
                "emotion": "confused",
                "percent": 3.9345284513128007
            },
            {
                "emotion": "surprised",
                "percent": 0.0
            },
            {
                "emotion": "neutral",
                "percent": 31.598276095331954
            },
            {
                "emotion": "unhappy",
                "percent": 8.058980485413368
            }
        ]
    },
    {
        "timestamp": 14100.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 56.364977124146705
            },
            {
                "emotion": "confused",
                "percent": 3.7967384089334764
            },
            {
                "emotion": "surprised",
                "percent": 0.0
            },
            {
                "emotion": "neutral",
                "percent": 31.994606867039025
            },
            {
                "emotion": "unhappy",
                "percent": 7.843677599880798
            }
        ]
    },
    {
        "timestamp": 14250.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 56.24654193153596
            },
            {
                "emotion": "confused",
                "percent": 3.653955456041899
            },
            {
                "emotion": "surprised",
                "percent": 0.0
            },
            {
                "emotion": "neutral",
                "percent": 32.43350406564626
            },
            {
                "emotion": "unhappy",
                "percent": 7.665998546775905
            }
        ]
    },
    {
        "timestamp": 14400.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 56.05325265465503
            },
            {
                "emotion": "confused",
                "percent": 3.511664701692896
            },
            {
                "emotion": "surprised",
                "percent": 0.0
            },
            {
                "emotion": "neutral",
                "percent": 32.89832461039771
            },
            {
                "emotion": "unhappy",
                "percent": 7.536758033254299
            }
        ]
    },
    {
        "timestamp": 14550.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 55.79116923548452
            },
            {
                "emotion": "confused",
                "percent": 3.3748311386366066
            },
            {
                "emotion": "surprised",
                "percent": 0.0
            },
            {
                "emotion": "neutral",
                "percent": 33.36985252120655
            },
            {
                "emotion": "unhappy",
                "percent": 7.464147104672309
            }
        ]
    },
    {
        "timestamp": 14700.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 55.508498507371584
            },
            {
                "emotion": "confused",
                "percent": 3.235660378231037
            },
            {
                "emotion": "surprised",
                "percent": 0.0
            },
            {
                "emotion": "neutral",
                "percent": 33.840941671467604
            },
            {
                "emotion": "unhappy",
                "percent": 7.414899442929766
            }
        ]
    },
    {
        "timestamp": 14850.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 55.2273961115683
            },
            {
                "emotion": "confused",
                "percent": 3.095850052723251
            },
            {
                "emotion": "surprised",
                "percent": 0.0
            },
            {
                "emotion": "neutral",
                "percent": 34.295162085035344
            },
            {
                "emotion": "unhappy",
                "percent": 7.381591750673083
            }
        ]
    },
    {
        "timestamp": 15000.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 54.958814347288495
            },
            {
                "emotion": "confused",
                "percent": 2.9608668301522845
            },
            {
                "emotion": "surprised",
                "percent": 0.0
            },
            {
                "emotion": "neutral",
                "percent": 34.71088860402294
            },
            {
                "emotion": "unhappy",
                "percent": 7.369430218536276
            }
        ]
    },
    {
        "timestamp": 15150.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 54.71257898673669
            },
            {
                "emotion": "confused",
                "percent": 2.835388046377051
            },
            {
                "emotion": "surprised",
                "percent": 0.0
            },
            {
                "emotion": "neutral",
                "percent": 35.07026190993146
            },
            {
                "emotion": "unhappy",
                "percent": 7.381771056954801
            }
        ]
    },
    {
        "timestamp": 15300.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 54.496611892111304
            },
            {
                "emotion": "confused",
                "percent": 2.723221013879363
            },
            {
                "emotion": "surprised",
                "percent": 0.0
            },
            {
                "emotion": "neutral",
                "percent": 35.36506126336474
            },
            {
                "emotion": "unhappy",
                "percent": 7.415105830644604
            }
        ]
    },
    {
        "timestamp": 15450.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 54.319157036750596
            },
            {
                "emotion": "confused",
                "percent": 2.6284932995405628
            },
            {
                "emotion": "surprised",
                "percent": 0.0
            },
            {
                "emotion": "neutral",
                "percent": 35.58812533096388
            },
            {
                "emotion": "unhappy",
                "percent": 7.464224332744971
            }
        ]
    },
    {
        "timestamp": 15600.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 54.167193468869414
            },
            {
                "emotion": "confused",
                "percent": 2.555466702328272
            },
            {
                "emotion": "surprised",
                "percent": 0.0
            },
            {
                "emotion": "neutral",
                "percent": 35.74958035406745
            },
            {
                "emotion": "unhappy",
                "percent": 7.52775947473485
            }
        ]
    },
    {
        "timestamp": 15750.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 53.99081471627187
            },
            {
                "emotion": "confused",
                "percent": 2.505662429127307
            },
            {
                "emotion": "surprised",
                "percent": 0.0
            },
            {
                "emotion": "neutral",
                "percent": 35.8915687696135
            },
            {
                "emotion": "unhappy",
                "percent": 7.611954084987329
            }
        ]
    },
    {
        "timestamp": 15900.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 53.79480769917271
            },
            {
                "emotion": "confused",
                "percent": 2.47916482501758
            },
            {
                "emotion": "surprised",
                "percent": 0.0
            },
            {
                "emotion": "neutral",
                "percent": 36.01545812273517
            },
            {
                "emotion": "unhappy",
                "percent": 7.710569353074558
            }
        ]
    },
    {
        "timestamp": 16050.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 53.58896927999605
            },
            {
                "emotion": "confused",
                "percent": 2.47614043914167
            },
            {
                "emotion": "surprised",
                "percent": 0.0
            },
            {
                "emotion": "neutral",
                "percent": 36.117385377662345
            },
            {
                "emotion": "unhappy",
                "percent": 7.817504903199935
            }
        ]
    },
    {
        "timestamp": 16200.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 53.38347076052155
            },
            {
                "emotion": "confused",
                "percent": 2.496610324890063
            },
            {
                "emotion": "surprised",
                "percent": 0.0
            },
            {
                "emotion": "neutral",
                "percent": 36.19025269938747
            },
            {
                "emotion": "unhappy",
                "percent": 7.929666215200938
            }
        ]
    },
    {
        "timestamp": 16350.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 53.187744784802675
            },
            {
                "emotion": "confused",
                "percent": 2.5404705763770723
            },
            {
                "emotion": "surprised",
                "percent": 0.0
            },
            {
                "emotion": "neutral",
                "percent": 36.22361812712914
            },
            {
                "emotion": "unhappy",
                "percent": 8.048166511691175
            }
        ]
    },
    {
        "timestamp": 16500.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 53.01179421454242
            },
            {
                "emotion": "confused",
                "percent": 2.607492890702643
            },
            {
                "emotion": "surprised",
                "percent": 0.0
            },
            {
                "emotion": "neutral",
                "percent": 36.206662147496075
            },
            {
                "emotion": "unhappy",
                "percent": 8.17405074725885
            }
        ]
    },
    {
        "timestamp": 16650.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 52.8366785265967
            },
            {
                "emotion": "confused",
                "percent": 2.6967415300075435
            },
            {
                "emotion": "surprised",
                "percent": 0.0
            },
            {
                "emotion": "neutral",
                "percent": 36.149451125302335
            },
            {
                "emotion": "unhappy",
                "percent": 8.317128818093424
            }
        ]
    },
    {
        "timestamp": 16800.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 52.64112468604399
            },
            {
                "emotion": "confused",
                "percent": 2.804433908890452
            },
            {
                "emotion": "surprised",
                "percent": 0.0
            },
            {
                "emotion": "neutral",
                "percent": 36.07345874000987
            },
            {
                "emotion": "unhappy",
                "percent": 8.48098266505568
            }
        ]
    },
    {
        "timestamp": 16950.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 52.43114445140637
            },
            {
                "emotion": "confused",
                "percent": 2.9261471412841322
            },
            {
                "emotion": "surprised",
                "percent": 0.0
            },
            {
                "emotion": "neutral",
                "percent": 35.98527164186946
            },
            {
                "emotion": "unhappy",
                "percent": 8.657436765440044
            }
        ]
    },
    {
        "timestamp": 17100.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 52.2125832556669
            },
            {
                "emotion": "confused",
                "percent": 3.0578763009787386
            },
            {
                "emotion": "surprised",
                "percent": 0.0
            },
            {
                "emotion": "neutral",
                "percent": 35.8907206276598
            },
            {
                "emotion": "unhappy",
                "percent": 8.838819815694594
            }
        ]
    },
    {
        "timestamp": 17250.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 51.99339841440121
            },
            {
                "emotion": "confused",
                "percent": 3.1951151624182614
            },
            {
                "emotion": "surprised",
                "percent": 0.0
            },
            {
                "emotion": "neutral",
                "percent": 35.79578432488266
            },
            {
                "emotion": "unhappy",
                "percent": 9.015702098297927
            }
        ]
    },
    {
        "timestamp": 17400.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 51.782314473598504
            },
            {
                "emotion": "confused",
                "percent": 3.3325260384020554
            },
            {
                "emotion": "surprised",
                "percent": 0.0
            },
            {
                "emotion": "neutral",
                "percent": 35.708271537619126
            },
            {
                "emotion": "unhappy",
                "percent": 9.176887950380252
            }
        ]
    },
    {
        "timestamp": 17550.0,
        "emotion_list": [
            {
                "emotion": "happy",
                "percent": 51.58376349770887
            },
            {
                "emotion": "confused",
                "percent": 3.465376312848898
            },
            {
                "emotion": "surprised",
                "percent": 0.0
            },
            {
                "emotion": "neutral",
                "percent": 35.63792447962409
            },
            {
                "emotion": "unhappy",
                "percent": 9.312935709818133
            }
        ]
    },
]

  ngOnInit(): void {
    this.processData();
  }

  private processData(): void {
    const timestamps = this.jsonData.map(e => e.timestamp);

    const emotionColors: { [key: string]: string } = {
      happy: '#FFD700', 
      confused: '#FF7F50', 
      surprised: '#483D8B', 
      neutral: '#1E90FF', 
      unhappy: '#FF0000' 
    };

    const datasets = Object.keys(emotionColors).map(emotion => ({
      label: emotion.charAt(0).toUpperCase() + emotion.slice(1), 
      data: this.jsonData.map(entry => {
        const emotionData = entry.emotion_list.find(e => e.emotion === emotion);
        return emotionData ? emotionData.percent : 0;
      }),
      borderColor: emotionColors[emotion],
      fill: false,
      tension: 0.4,
      pointRadius: 0,
      borderWidth: 1
    }));

    this.lineChartData = { labels: timestamps, datasets };
  }
}
