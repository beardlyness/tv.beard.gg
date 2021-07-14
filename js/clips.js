var video = new Array ();
video[0] = "https://clips.twitch.tv/embed?clip=IronicMoldyLardSaltBae&parent=tv.beard.gg";
video[1] = "https://clips.twitch.tv/embed?clip=BrainyHomelyDinosaurCmonBruh&parent=tv.beard.gg";
video[2] = "https://clips.twitch.tv/embed?clip=HedonisticProductiveBeaverHotPokket&parent=tv.beard.gg";
video[3] = "https://clips.twitch.tv/embed?clip=AntediluvianSassyHedgehogTooSpicy-vYLszOeS2IvWz2Zf&parent=tv.beard.gg";
video[4] = "https://clips.twitch.tv/embed?clip=FurryBoredSnoodPoooound&parent=tv.beard.gg";
video[5] = "https://clips.twitch.tv/embed?clip=VibrantRockyTroutPJSalt-20jRamN9icjuO0q5&parent=tv.beard.gg";
video[6] = "https://clips.twitch.tv/embed?clip=PlumpAbrasiveRaccoonNononoCat-oUydhZKYTJoW1RMC&parent=tv.beard.gg";
video[7] = "https://clips.twitch.tv/embed?clip=CautiousFunnyWallabyThisIsSparta&parent=tv.beard.gg";
video[8] = "https://clips.twitch.tv/embed?clip=CooperativeObservantOkapiSquadGoals&parent=tv.beard.gg";
video[9] = "https://clips.twitch.tv/embed?clip=AmorphousRelievedBulgogiWholeWheat-w-T_vYI_YG-rmPdy&parent=tv.beard.gg";
video[10] = "https://clips.twitch.tv/embed?clip=LittleArborealCaribouOhMyDog-FvKEpTVGewY87DpY&parent=tv.beard.gg";
video[11] = "https://clips.twitch.tv/embed?clip=GiftedStrongKuduFUNgineer-DPM8gHXDbGJhNFZw&parent=tv.beard.gg";
video[12] = "https://clips.twitch.tv/embed?clip=PunchyFreezingMangoCurseLit-bFzNZEuJ4yES-3eV&parent=tv.beard.gg";
video[13] = "https://clips.twitch.tv/embed?clip=FastTardyChickenPJSugar-cDy_EcC6nIjsQaV2&parent=tv.beard.gg";
video[14] = "https://clips.twitch.tv/embed?clip=ImpartialDifficultMoonTakeNRG-W3VqRXP9Cr01eYfA&parent=tv.beard.gg";
video[15] = "https://clips.twitch.tv/embed?clip=RelievedBigEggplantUWot-hhbME-xoLlXen-hI&parent=tv.beard.gg";

var size = video.length
var x = Math.floor(size*Math.random())

$('#twtvrnd').attr('src',video[x]);
