import {maxAverageRatio} from '../script'

describe('1792. Maximum Average Pass Ratio', (): void => {
    it('One', (): void => {
        expect(maxAverageRatio([[1, 2], [3, 5], [2, 2]], 2))
            .toBeCloseTo(0.78333, 5)
    })

    it('Two', (): void => {
        expect(maxAverageRatio([[2, 4], [3, 9], [4, 5], [2, 10]], 4))
            .toBeCloseTo(0.53485, 5)
    })

    it('Load test', (): void => {
        expect(maxAverageRatio([[296, 857], [260, 882], [448, 544], [245, 474], [332, 356], [240, 356], [830, 882], [21, 679], [258, 650], [518, 959], [924, 986], [123, 773], [494, 779], [686, 876], [329, 932], [56, 308], [40, 273], [402, 555], [184, 416], [588, 925], [83, 343], [271, 869], [2, 326], [306, 871], [771, 894], [233, 526], [112, 913], [394, 461], [515, 688], [339, 377], [275, 492], [222, 516], [659, 954], [362, 915], [53, 845], [414, 952], [419, 554], [680, 985], [328, 488], [29, 123], [340, 619], [464, 472], [723, 766], [642, 830], [542, 849], [109, 265], [142, 222], [1, 699], [686, 697], [767, 951], [455, 555], [5, 73], [130, 923], [28, 742], [572, 690], [6, 50], [71, 629], [470, 650], [501, 925], [397, 749], [363, 430], [18, 201], [172, 976], [32, 841], [140, 783], [81, 601], [211, 859], [205, 244], [9, 487], [245, 327], [929, 971], [603, 881], [131, 417], [398, 538], [509, 684], [203, 934], [265, 411], [847, 871], [531, 666], [289, 860], [227, 777], [170, 946], [369, 820], [29, 440], [279, 917], [97, 374], [355, 718], [355, 904], [181, 923], [420, 758], [82, 941], [75, 814], [232, 871], [240, 990], [669, 822], [819, 868], [664, 768], [39, 221], [144, 281], [325, 934], [769, 897], [638, 931], [193, 677], [36, 696], [199, 492], [621, 734], [109, 248], [21, 790], [527, 546], [277, 713], [13, 81], [490, 905], [39, 525], [409, 991], [114, 887], [654, 925], [416, 441], [404, 599], [359, 864], [383, 496], [325, 683], [479, 783], [744, 965], [264, 671], [151, 525], [805, 973], [815, 875], [575, 774], [166, 906], [892, 995], [121, 434], [140, 753], [72, 714], [205, 722], [407, 986], [428, 781], [586, 712], [291, 517], [450, 683], [52, 330], [185, 583], [204, 603], [344, 385], [280, 471], [614, 904], [154, 810], [407, 554], [156, 250], [724, 760], [768, 866], [350, 595], [209, 732], [251, 889], [388, 860], [4, 711], [489, 963], [705, 855], [296, 683], [140, 755], [700, 781], [221, 582], [349, 349], [265, 969], [754, 959], [50, 990], [27, 514], [76, 247], [416, 591], [738, 960], [190, 529], [576, 608], [38, 841], [541, 893], [204, 665], [246, 252], [520, 998], [352, 445], [332, 872], [56, 707], [6, 659], [575, 840], [625, 657], [347, 450], [742, 953], [166, 339], [232, 758], [511, 833], [7, 402], [46, 974], [291, 566], [15, 445], [149, 294], [740, 953], [137, 642], [2, 413], [439, 497], [638, 997], [145, 707], [207, 736], [122, 323], [505, 649], [448, 994], [72, 778], [323, 363], [214, 857], [80, 223], [429, 640], [828, 910], [126, 828], [585, 903], [420, 874], [137, 566], [395, 516], [431, 442], [469, 492], [640, 959], [248, 630], [439, 911], [254, 585], [845, 882], [68, 689], [27, 329], [233, 357], [280, 650], [427, 856], [322, 683], [172, 353], [198, 241], [608, 716], [129, 504], [161, 175], [146, 700], [230, 548], [872, 883], [40, 987], [391, 771], [347, 384], [492, 809], [380, 568], [367, 745], [820, 975], [233, 760], [422, 482], [475, 893], [244, 896], [529, 943], [104, 940], [149, 693], [155, 204], [596, 620], [130, 232], [346, 421], [465, 643], [458, 480], [105, 675], [4, 193], [468, 790], [413, 512], [207, 580], [618, 851], [463, 644], [77, 586], [176, 476], [52, 307], [387, 771], [618, 706], [290, 931], [177, 928], [175, 450], [313, 986], [312, 702], [20, 492], [301, 486], [370, 549], [324, 495], [83, 96], [494, 836], [179, 575], [469, 678], [197, 437], [742, 845], [704, 769], [287, 337], [708, 738], [140, 989], [269, 393], [10, 346], [634, 889], [88, 453], [553, 755], [733, 765], [454, 897], [355, 742], [776, 920], [292, 497], [919, 988], [307, 399], [2, 118], [50, 714], [23, 145], [31, 861], [163, 269], [42, 504], [727, 774], [448, 717], [422, 599], [326, 858], [407, 517], [155, 222], [614, 946], [594, 685], [911, 966], [25, 431], [350, 651], [412, 518], [670, 687], [237, 242], [217, 996], [136, 500], [195, 654], [346, 580], [39, 188], [83, 182], [680, 979], [6, 443], [320, 711], [42, 685], [448, 627], [212, 877], [200, 923], [504, 849], [26, 702], [525, 980], [611, 813], [529, 872], [607, 936], [720, 894], [861, 994], [315, 696], [658, 779], [616, 967], [236, 902], [880, 891], [98, 817], [9, 337], [508, 867], [216, 432], [234, 480], [165, 997], [163, 790], [149, 890], [166, 557], [365, 466], [99, 859], [246, 684], [298, 891], [633, 969], [435, 441], [459, 686], [6, 913], [416, 966], [150, 446], [259, 540], [398, 630], [311, 373], [748, 945], [440, 821], [494, 737], [592, 617], [110, 658], [340, 968], [102, 782], [159, 172], [311, 835], [680, 725], [535, 535], [732, 734], [185, 925], [90, 971], [461, 777], [417, 510], [620, 970], [103, 844], [530, 552], [654, 892], [489, 788], [395, 567], [372, 385], [308, 318], [459, 485], [753, 781], [477, 769], [269, 309], [488, 776], [252, 338], [224, 926], [535, 676], [551, 571], [311, 439], [118, 840], [47, 562], [337, 395], [886, 979], [483, 685], [109, 831], [75, 127], [989, 993], [343, 478], [292, 395], [65, 378], [208, 503], [68, 981], [82, 464], [374, 872], [340, 788], [310, 680], [124, 862], [946, 955], [394, 771], [57, 819], [224, 873], [697, 781], [475, 741], [487, 992], [122, 936], [295, 368], [252, 877], [115, 492], [160, 447], [46, 55], [26, 37], [98, 284], [629, 708], [107, 213], [101, 906], [813, 945], [267, 590], [18, 639], [526, 839], [513, 553], [88, 297], [629, 935], [171, 752], [473, 717], [138, 191], [756, 756], [613, 645], [207, 695], [195, 806], [406, 579], [466, 672], [631, 695], [71, 93], [132, 688], [491, 940], [354, 996], [34, 268], [195, 268], [634, 920], [182, 540], [534, 576], [166, 522], [161, 476], [568, 868], [443, 709], [153, 427], [588, 955], [241, 909], [1, 299], [583, 691], [35, 618], [61, 177], [412, 456], [148, 679], [529, 963], [224, 638], [568, 747], [479, 886], [107, 203], [130, 561], [111, 897], [264, 679], [304, 971], [27, 823], [561, 963], [594, 688], [365, 812], [324, 690], [291, 750], [880, 937], [533, 920], [34, 538], [335, 959], [6, 20], [395, 471], [180, 694], [619, 633], [221, 389], [7, 582], [737, 1000], [204, 776], [697, 761], [151, 500], [664, 956], [56, 375], [400, 421], [177, 983], [490, 780], [164, 705], [179, 539], [632, 962], [833, 855], [181, 476], [722, 915], [119, 924], [568, 633], [654, 975], [21, 217], [265, 583], [29, 373], [656, 936], [90, 322], [430, 823], [358, 595], [442, 486], [637, 894], [84, 262], [786, 837], [290, 659], [486, 684], [501, 782], [525, 926], [604, 953], [617, 703], [599, 660], [470, 834], [238, 964], [480, 925], [303, 309], [135, 645], [395, 548], [64, 98], [204, 512], [249, 831], [32, 666], [309, 431], [683, 963], [138, 179], [334, 743], [35, 653], [243, 665], [369, 591], [382, 976], [125, 582], [258, 703], [346, 737], [432, 985], [57, 625], [114, 662], [574, 606], [167, 235], [591, 601], [403, 853], [15, 223], [368, 887], [87, 252], [204, 530], [221, 566], [610, 865], [523, 623], [501, 659], [132, 423], [26, 571], [381, 433], [110, 976], [137, 508], [330, 442], [113, 672], [468, 554], [261, 441], [4, 480], [14, 376], [290, 927], [328, 739], [158, 408], [345, 558], [511, 837], [95, 720], [339, 535], [386, 914], [53, 552], [13, 822], [520, 865], [467, 506], [679, 796], [153, 849], [255, 608], [750, 804], [766, 802], [108, 800], [120, 352], [203, 657], [133, 933], [231, 955], [383, 703], [282, 915], [159, 642], [57, 858], [319, 420], [300, 939], [287, 427], [81, 540], [21, 739], [282, 987], [108, 961], [61, 302], [610, 768], [215, 696], [277, 659], [45, 859], [115, 481], [16, 201], [234, 963], [11, 749], [476, 995], [206, 470], [589, 999], [492, 993], [743, 788], [745, 754], [145, 774], [353, 531], [47, 961], [354, 971], [680, 900], [158, 756], [125, 229], [285, 925], [644, 991], [244, 608], [86, 885], [749, 770], [54, 572], [161, 465], [104, 963], [755, 937], [151, 715], [9, 872], [165, 724], [456, 801], [639, 711], [22, 140], [55, 874], [95, 411], [800, 863], [314, 961], [406, 809], [551, 851], [301, 727], [305, 520], [382, 731], [79, 710], [245, 657], [6, 61], [78, 272], [282, 586], [375, 966], [458, 636], [261, 528], [172, 200], [552, 999], [39, 791], [202, 546], [616, 617], [523, 591], [257, 442], [387, 823], [553, 712], [237, 289], [369, 742], [102, 727], [234, 263], [119, 490], [406, 430], [383, 632], [368, 558], [478, 590], [704, 767], [273, 429], [242, 541], [379, 592], [604, 636], [829, 904], [813, 860], [174, 186], [175, 721], [85, 150], [199, 375], [212, 438], [841, 928], [677, 916], [731, 874], [82, 895], [109, 795], [336, 959], [200, 489], [387, 932], [392, 981], [179, 942], [527, 669], [258, 814], [386, 601], [380, 955], [230, 860], [162, 441], [120, 806], [115, 434], [390, 395], [69, 576], [402, 985], [159, 544], [68, 181], [711, 755], [66, 459], [198, 758], [173, 389], [145, 280], [557, 874], [146, 999], [559, 575], [343, 350], [634, 778], [272, 917], [155, 707], [126, 934], [354, 727], [176, 225], [64, 961], [186, 263], [141, 211], [177, 564], [13, 543], [540, 969], [460, 918], [938, 984], [46, 752], [297, 557], [344, 838], [208, 749], [884, 905], [345, 539], [186, 504], [427, 618], [211, 780], [516, 855], [50, 670], [234, 446], [368, 952], [541, 721], [258, 852], [21, 995], [360, 523], [108, 586], [58, 240], [753, 894], [503, 696], [293, 882], [612, 921], [55, 496], [556, 698], [408, 730], [385, 873], [665, 793], [543, 990], [390, 558], [540, 760], [47, 373], [287, 297], [554, 925], [460, 839], [7, 194], [207, 822], [591, 688], [293, 979], [184, 878], [481, 595], [282, 304], [615, 801], [369, 745], [657, 874], [305, 693], [647, 786], [595, 875], [554, 979], [289, 459], [531, 536], [68, 590], [152, 878], [326, 784], [313, 778], [131, 340], [10, 836], [835, 872], [227, 530], [306, 983], [564, 941], [743, 977], [191, 889], [91, 880], [109, 547], [772, 881], [566, 762], [584, 778], [464, 621], [167, 723], [179, 431], [211, 317], [221, 930], [614, 655], [346, 718], [476, 777], [70, 480], [276, 360], [671, 710], [93, 161], [337, 773], [199, 788], [272, 324], [347, 404], [212, 586], [396, 538], [213, 791], [600, 855], [443, 796], [899, 904], [584, 954], [372, 865]], 72567))
            .toBeCloseTo(0.59642, 5)
    })
})