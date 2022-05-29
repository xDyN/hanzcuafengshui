$(document).ready(function (e) {
    function t(e, t = !1, a = "") {
        var n = "",
            o = "",
            i = "";
        return (
            "manager" === e && (n = '<img class="chat-content-desc-image" src="img/Hanz-Cua12.png" alt="" />'),
            t && ((o = "text-" + t), (i = ' class="p' + t + '"')),
            '<div class="chat-content-item ' + e + " " + o + '"><div class="chat-content-desc">' + n + '<div class="chat-content-desc-item ' + e + '"><p' + i + ">" + a + "</p></div></div></div>"
        );
    }

    function a(a) {
        $(".chat-content-buttons-gender").remove(),
            $(".chat-content-list").append(t("user")),
            $(".chat-content-item.user p").html(e.managerDialog[1][a].text),
            $(".chat-content-list").append(t("manager")),
            $(".chat-content-item.manager p").typed({
                strings: [e.managerDialog[2].text],
                showCursor: !1,

                callback: function () {
                    setTimeout(function () {
                        //

                        //
                        var n, o, r;
                        $(".chat-content-list").append(
                            '<form name="questionForm" class="form"><div class="form-group"><div class="form-group-inline">' +
                            '<select name="day" class="custom-select select-day">' +
                            '<option value="" selected="selected">Day</option>' +
                            (function () {
                                for (i = e.DateBirthday[0].day[0]; i < e.DateBirthday[0].day[1] + 1; i++) n += '<option value="' + i + '">' + i + "</option>";
                                return n;
                            })() +
                            '</select>' +
                            '</div>' +
                            '<div class="form-group-inline full-month">' +
                            '<select name="month" class="custom-select select-month">' +
                            '<option value="" selected="selected">Month</option>' +
                            ($.each(e.DateBirthday[0].month, function (e, t) {
                                o += '<option value="' + (e + 1) + '">' + t + "</option>";
                            }),
                                o) +
                            '</select>' +
                            '</div>' +
                            '<div class="form-group-inline year">' +
                            '<select name="year" class="custom-select select-year">' +
                            '<option value="" selected="selected">Year</option>' +
                            (function () {
                                for (i = e.DateBirthday[0].year[0]; i < e.DateBirthday[0].year[1] + 1; i++) r += '<option value="' + i + '">' + i + "</option>";
                                return r;
                            })() +
                            "</select>" +
                            "</div>" +
                            "</div>" +
                            "</form>"
                        ),
                            e.Scroll();
                        var c,
                            s = [],
                            d = $('form[name="questionForm"]');
                        d.find("select").addClass("empty_field"),
                            d.find("select").change(function () {
                                if (
                                    (d.find("select").each(function () {
                                        "" != $(this).val() ? $(this).removeClass("empty_field") : $(this).addClass("empty_field"), (s[this.name] = $(this).val());
                                    }),
                                    0 == d.find(".empty_field").size())
                                ) {
                                    d.remove();
                                    var n = e.MonthVariantType[s.month - 1],
                                        o = e.MonthVariant[n][0],
                                        i = e.MonthVariant[n][1],
                                        r = e.MonthVariant[n][2];
                                    (c = [s.day, s.month]),
                                        (c = e.getZodiak(c)),
                                        (s.day = s.day.length > 1 ? s.day : "0" + s.day),
                                        (s.month = s.month.length > 1 ? s.month : "0" + s.month),
                                        $(".chat-content-list").append(t("user", "date")),
                                        $(".chat-content-item.user.text-date p").html(s.day + "." + s.month + "." + s.year);
                                    var l = [],
                                        m = [],
                                        p = {
                                            zodie: e.ZodiakName[c - 1].name,
                                            date: s.day,
                                            month1: o,
                                            month2: i,
                                            month3: r,
                                            year: s.year,
                                            number: e.randomIntFromInterval(4, 10)
                                        };
                                    $(".chat-content-list").append(t("manager", "birthday"));
                                    var u = e.userZodiak[0].text,
                                        h = e.Replace(u, p);
                                    $(".chat-content-item.manager p").typed({
                                        strings: [h],
                                        showCursor: !1,
                                        callback: function () {
                                            var t = [{text: e.Replace(e.socNumber[0].text, p)}];
                                            (l = $.merge(e.managerVariants[a][0][0], t)),
                                                (l = $.merge(l, e.managerVariants[a][0][1])),
                                                $.each(l, function (t, a) {
                                                    m.push(e.Replace(a.text, p));
                                                }),
                                                e.LoadListMessages(m, p.zodie);
                                        },
                                    });
                                }
                            });
                    }, 1e3);
                },
            });
    }

    var n = document.querySelector(".country_action").innerHTML,
        o = document.querySelector(".new_price_val").innerHTML,
        r = document.querySelector(".new_price_cur").innerHTML;
        console.log(o),
        console.log(r),
        (e.randomIntFromInterval = function (e, t) {
            return Math.floor(Math.random() * (t - e + 1) + e);
        }),
        (e.managerDialog = [
            {
                text: "Hi!<br>Ako si Hanz Cua. Isang Physic reader at Astrologo.<br>Anong pangalan mo?",
            },
            {
                text: "Ikaw ba ay Lalaki o Babae?",
                m: {text: "Lalaki"}, w: {text: "Babae"}
            },
            {
                text: "Kailan ka ipinanganak?"
            },
        ]),
        (e.userZodiak = [
            {
                text: "Salamat Sa pamamagitan ng horoscope ikaw ay - <p style='color: #3fc726'>{zodie}</p>. <p class='hidden-zodie' style='display: none'>{zodie}</p>"
            }
        ]),
        (e.managerVariants = {
            w: [
                [
                    [
                        {text: 'Ikaw ay isang napaka-patas na tao, palaging makinig sa mga tao mula sa magkabilang panig, hindi mahilig makipag-usap nang labis at napopoot sa pagiging kumplikado. Minsan marami kang iniisip tungkol sa isang problema, pagkatapos mong pag-isipang mabuti ito ay gagawa ka ng pinakamahusay na pagpipilian.'},
                        {text: '<br><img width="400px" src="img/2.jpg"></br>'},
                        {text: "Ang iyong landas sa karera ay madalas na puno ng mga paghihirap. Karamihan sa mga tao ay laban sa iyo, ito ay dahil pinipigilan ka ng madilim na pwersa kaya't hindi naging maayos ang iyong buhay. Huwag mong palampasin ang anuman, tutulungan kitang harapin ang mga masasamang bagay na patuloy na pumipigil sa iyo"},
                        {text: '<br><img width="400px" src="img/sep.jpg"></br>'},
                        {text: 'Ang iyong lahat ay nagpapakita na ikaw ay ipinanganak upang maging isang pinuno, na ikaw ay mas mahusay kaysa sa karamihan at na ang iyong mga pagpipilian ay palaging tama at visionary'},
                        {text: "Upang malaman ang iyong kapalaran sa hinaharap, paikutin ang gulong ng astrolohiya, ito ang magsasabi sa iyo kung ano ang mangyayari sa iyo sa malapit na hinaharap, maiiwasan mo ang malas kung paikutin mo ang gulong na ito astrolohiya."},
                    ],
                    [
                        {text: " "},
                    ],
                ],
            ],
            m: [
                [
                    [{text: 'Ikaw ay isang napaka-patas na tao, palaging makinig sa mga tao mula sa magkabilang panig, hindi mahilig makipag-usap nang labis at napopoot sa pagiging kumplikado. Minsan marami kang iniisip tungkol sa isang problema, pagkatapos mong pag-isipang mabuti ito ay gagawa ka ng pinakamahusay na pagpipilian.'},
                        {text: '<br><img width="400px" src="img/2.jpg"></br>'},
                        {text: "Ang iyong landas sa karera ay madalas na puno ng mga paghihirap. Karamihan sa mga tao ay laban sa iyo, ito ay dahil pinipigilan ka ng madilim na pwersa kaya't hindi naging maayos ang iyong buhay. Huwag mong palampasin ang anuman, tutulungan kitang harapin ang mga masasamang bagay na patuloy na pumipigil sa iyo"},
                        {text: '<br><img width="400px" src="img/sep.jpg"></br>'},
                        {text: 'Ang iyong lahat ay nagpapakita na ikaw ay ipinanganak upang maging isang pinuno, na ikaw ay mas mahusay kaysa sa karamihan at na ang iyong mga pagpipilian ay palaging tama at visionary'},
                        {text: "Upang malaman ang iyong kapalaran sa hinaharap, paikutin ang gulong ng astrolohiya, ito ang magsasabi sa iyo kung ano ang mangyayari sa iyo sa malapit na hinaharap, maiiwasan mo ang malas kung paikutin mo ang gulong na ito astrolohiya."},
                    ],
                    [
                        {text: ""},
                    ],
                ],
            ],
        }),
        (e.socNumber = [{
            text: "Paki-click ang button sa ibaba"
        },]),
        (e.Forms = function (t) {
            e.FormsParams = {
                method: "POST",
                action: "",
                inputs: [
                    {name: "name", value: "", placeholder: "Enter your name", type: "text", required: !0},
                    {name: "phone", value: "", placeholder: "Enter your phone", type: "tel", required: !0},
                ],
                btn_text: "Order amulet",
                title: "Order form amulet by Hanz Cua",
            };
            return function () {
                document.getElementById("cont_form").style.display = "block";
            };
        }),
        (e.getZodiak = function (t) {
            var a = parseInt(t[0]);
            switch (parseInt(t[1])) {
                case 1:
                    e.zodiak = a < 20 ? 10 : 11;
                    break;
                case 2:
                    e.zodiak = a < 19 ? 11 : 12;
                    break;
                case 3:
                    e.zodiak = a < 21 ? 12 : 1;
                    break;
                case 4:
                    e.zodiak = a < 20 ? 1 : 2;
                    break;
                case 5:
                    e.zodiak = a <= 21 ? 2 : 3;
                    break;
                case 6:
                    e.zodiak = a < 21 ? 3 : 4;
                    break;
                case 7:
                    e.zodiak = a < 23 ? 4 : 5;
                    break;
                case 8:
                    e.zodiak = a < 23 ? 5 : 6;
                    break;
                case 9:
                    e.zodiak = a < 23 ? 6 : 7;
                    break;
                case 10:
                    e.zodiak = a < 23 ? 7 : 8;
                    break;
                case 11:
                    e.zodiak = a < 22 ? 8 : 9;
                    break;
                case 12:
                    e.zodiak = a < 22 ? 9 : 10;
            }
            return e.zodiak;
        }),
        (e.ZodiakName = [
            {name: "Aries", id: 1},
            {name: "Taurus", id: 2},
            {name: "Gemini", id: 3},
            {name: "Cancer", id: 4},
            {name: "Leo", id: 5},
            {name: "Virgo", id: 6},
            {name: "Libra", id: 7},
            {name: "Scorpio", id: 8},
            {name: "Sagittarius", id: 9},
            {name: "Capricorn", id: 10},
            {name: "Aquarius", id: 11},
            {name: "Pisces", id: 12},
        ]),
        (e.DateBirthday = [{
            day: [1, 31],
            month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            year: [1940, 2000]
        }]),
        (e.MonthVariantType = ["january", "fabruary", "march", "april", "may", "june", "august", "august", "september", "october", "november", "december"]),
        (e.MonthVariant = {
            january: ["январь", "января", "январе"],
            fabruary: ["февраль", "февраля", "феврале"],
            march: ["март", "марта", "марте"],
            april: ["апрель", "апреля", "апреле"],
            may: ["май", "мая", "мае"],
            june: ["июнь", "июня", "июне"],
            july: ["июль", "июля", "июле"],
            august: ["август", "августа", "августе"],
            september: ["сентябрь", "сентября", "сентябре"],
            october: ["октябрь", "октября", "октебре"],
            november: ["ноябрь", "ноября", "ноябре"],
            december: ["декабрь", "декабря", "декабре"],
        }),
        (e.Scroll = function () {
            $(document).ready(function () {
                !(function (e, t = function () {
                }, a = []) {
                    (e = jQuery(e)), (t = t.bind(e));
                    var n = -1,
                        o = -1;
                    setInterval(function () {
                        (e.height() == n && e.width() == o) || ((n = e.height()), (o = e.width()), e.parent().animate({scrollTop: n}, 50), t.apply(null, a));
                    }, 100);
                })(".chat-content-container .chat-content-list", function (e) {
                }, []);
            });
        }),
        (e.Replace = function (e, t) {
            var a = e;
            return (
                Object.entries(t).forEach((e) => {
                    var t = "{" + e[0] + "}",
                        n = new RegExp(t, "g");
                    a = a.replace(n, e[1]);
                }),
                    a
            );
        }),
        (e.LoadListMessages = function (a, n) {
            var o,
                i = 1,
                r = 1,
                c = {showCursor: !1};
            for (o = a.length; i < o + 1; i++)
                (c.onStringTyped = function () {
                    ++r < o + 1 && ((c.array_id = r), (c.strings = [a[r - 1]]), $(".chat-content-list").append(t("manager", r)), $(".chat-content-item.manager p.p" + r).typed(c), e.Scroll()),
                    r == o + 1 &&
                    setTimeout(function () {
                        $(".chat-content-list").append(e.Forms(n)), e.Scroll();
                    }, 1500); // 1500
                }),
                1 == i && ((c.array_id = i), (c.strings = [a[i - 1]]), $(".chat-content-list").append(t("manager", i)), $(".chat-content-item.manager p.p" + i).typed(c), e.Scroll());
        }),
        $(window).on("load", function () {
            $(".chat-content-list").append(t("manager")),
                e.Scroll(),
                $(".chat-content-item.manager p").typed({
                    strings: [e.managerDialog[0].text],
                    showCursor: !1,
                    callback: function () {
                        setTimeout(function () {
                            $(".chat-content-list").append(t("manager")),
                                e.Scroll(),
                                $(".chat-content-item.manager p").typed({
                                    strings: [e.managerDialog[1].text],
                                    showCursor: !1,
                                    callback: function () {
                                        setTimeout(function () {
                                            var t;
                                            e.Scroll(),
                                                $(".chat-content-list").append(
                                                    '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="chooseGender" data-type="m">' +
                                                    (t = e.managerDialog[1]).m.text +
                                                    '</span></div><div class="chat-content-buttons-gender-block"><span class="chooseGender" data-type="w">' +
                                                    t.w.text +
                                                    "</span></div></div>"
                                                ),
                                                e.Scroll(),
                                                $(".chooseGender").on("click", function () {
                                                    a($(this).data("type"));
                                                });
                                        }, 1e3);
                                    },
                                });
                        }, 1e3);
                    },
                });
        });
});