 import {View,TouchableOpacity,ScrollView,Text,StyleSheet} from 'react-native'
import {Component} from 'react'

export default class Liste extends Component{
    constructor(props){
        super(props);
        this.state = {
            songs:{
                lumiere : [
                    {
                      id: 61,
                      type: 'Composition',
                      titre: 'AFRIKA AMANI',
                      contenu: 'Ah Afrika twalia amani yo, Afrika twaomba amani, eh mungu utu shindie, twakosa amani inchini  mwetu Kongo oh Ee bwana utu onee hurua ah ah Afrika twalia amani yo Afrika twa omba amini Ee mungu utu onee huruma ah ah\n' +
                        ' \n' +
                        'Tuna kusihi baba kwa rehema zako tuletee amani amani amani ni wewe peke ndiwe tumaini letu',
                      auteur: null
                    },
                    {
                      id: 60,
                      type: 'Composition',
                      titre: 'ALIJUJA KWA WALIO WAKE',
                      contenu: 'R// Ali kuja kwawalio wake, ilabwalio wake walimukataa x2, baliwalio mpokea aliwapa uwezo wakuitwa wana wa mungu. x2\n' +
                        '\n' +
                        'Kwamaana, gisi mungu, kaupenda ulimwengu, hata kamutoa mwana wake wapekee, ili kila atakaye, muamini asipotee bali awe na uzima wamilele.\n' +
                        '\n' +
                        'Mupokee yesu ili akae ndani yako, ili nawe uitwe mwana wa mungu upate uzima wamilelex2\n' +
                        '\n' +
                        'Kiambaza kilicho tutenga naye mungu baba yesu ali kibomoa, neema bado ingalipo ndugu yangu yesu ana kuita.',
                      auteur: 'Frère DUDOS'
                    },
                    {
                      id: 17,
                      type: 'Composition',
                      titre: 'ALLEZ VERS TOUS LES PEUPLES',
                      contenu: '-Allez vers tous les peuples, vers toutes les nations, allez vers toutes les races pour annoncer l’évangile(x4)\n' +
                        '\n' +
                        '-Jésus dira à Nicodème, comme il te dit dès lors, que tu ne peut hériter le royaume, sans être né de nouveau\n' +
                        '\n' +
                        '-Voilà l’importance du baptême, une marque de la croyance, une façon de confesser que christ est le sauveur',
                      auteur: 'Frères JIMMY et RAPHAEL'
                    },
                    {
                      id: 47,
                      type: 'Composition',
                      titre: 'A PATAYE',
                      contenu: 'Apataye muke amepata kitu kizuri biblia ya sema, heri wa wili kuliko mumoja ah ah kuliko mumoja X2\n' +
                        '\n' +
                        'R// Mubarikiwe katika unyumba wenu Mupendane bila unafiki ndipo mutazipata Baraka Baraka Baraka. ',
                      auteur: null
                    },
                    {
                      id: 68,
                      type: 'Composition',
                      titre: 'A PATAYE MUKE',
                      contenu: 'R// Apataye muke amepata kitu kizuri biblia ya sema heri wa wili kuliko mumoja ah kuliko mumoja\n' +
                        '\n' +
                        '(v) Biblia yasema mama (baba) yangu, mume ata acha baba na mama na kuambatana na muke wake, nawo wa wili mutu momoja.\n' +
                        '\n' +
                        ' R//...\n' +
                        '\n' +
                        'Mubarikiwe katika unyumba wenu x2, Mupendane bila unafiki hapo ndipo mutazipata baraka baraka.',
                      auteur: null
                    },
                    {
                      id: 52,
                      type: 'Composition',
                      titre: 'AUPRÈS DE TOI ',
                      contenu: 'Tout près de toi\n' +
                        'Auprès de toi\n' +
                        'Plus près de toi je veux demeurer x2\n' +
                        '\n' +
                        'Plus près de toi, le reste de ma vie. Plus près de toi dans ta présence.     Plus près de toi, dans les rayons de ta splendeur, \n' +
                        'Plus de toi dans ta gloire qui gouverne\n' +
                        '\n' +
                        'Dans la vallée de mes l’espérance,     où le soleil ne brille pas                    où les\n' +
                        'vents ne soufflent pas               où  la \n' +
                        'guerre ne pas le mode           \n' +
                        ' et la misère est maîtrisée\n' +
                        '\n' +
                        'Tout près de toi ah ah ah ah\n' +
                        'Mon asile préféré\n' +
                        'Auprès de toi\n' +
                        'Où mes rêves prennent chaire\n' +
                        'Plus près de toi ',
                      auteur: 'Frère RAPHAEL'
                    },
                    {
                      id: 38,
                      type: 'Composition',
                      titre: 'BAADA ZIKI ZA DUNIA ',
                      contenu: 'Baada ziki za dunia, njaa teso nazo shida, mbingu tuta kapo fika, tutapanguzwa chozi naye bwana\n' +
                        '\n' +
                        'Tuta pewa taji ushindi, ni shangwe kua naye bwana.\n' +
                        '\n' +
                        'Oh oh oh, oh oh oh oh, oh oh oh, alleluia x2\n' +
                        '\n' +
                        'Milele tuta imba nawa malaika oh oh x4. Tuta shangilia',
                      auteur: 'Frères JIMMY et PAULIN'
                    },
                    {
                      id: 4,
                      type: 'Composition',
                      titre: "CHERCHE L'ÉTERNEL",
                      contenu: 'Cherche l’Éternel pendant qu’il se trouve, invoquez-le, tandis qu’il est près, avant que ne surviennent les mauvais jours, où vous le chercherez et ne le trouverez point.\n' +
                        '\n' +
                        '-Que le pécheur abandonne sa voie, et se tourne vers Dieu le créateur, notre Dieu est toujours près à pardonner.\n' +
                        '\n' +
                        '-Que l’homme sans foi na  loi abandonne sa voie, et se tourne vers Dieu le créateur, notre Dieu est toujours près à pardonner.\n' +
                        '\n' +
                        '-La vie nous n’avons qu’une seule puis vient le jugement, or, ceux qui sont en christ ne sont point jugés.',
                      auteur: 'Frère L. KAYAMBA'
                    },
                    {
                      id: 7,
                      type: 'Composition',
                      titre: "D'ABORD LE ROYAUME DE DIEU",
                      contenu: 'Cherche d’abord le royaume de Dieu, et la justice qu’il demande et le reste vous sera donné par-dessus tous, soyez toujours dans la joie, remerciez Dieu à tous égards éclairer par le saint esprit de Dieu\n' +
                        '\n' +
                        '-Ne vous souciez pas du demain, de ce que vous serez demain, demain se souciera de lui-même,\n' +
                        '\n' +
                        'A chaque jour suffit sa peine, ne vous souciez pas du demain, demain se souciera de lui-même \n' +
                        '\n' +
                        '-Observez les oiseaux les animaux, ils ne sèment ni moissonnent, mais ils espèrent à demain\n' +
                        '\n' +
                        'N’êtes pas crées à limage de Dieu, qui reçois une pierre sil demande du pain à son père, bannis le chagrin de ton cœur Dieu t’aime. ',
                      auteur: 'Frère RAPHAEL'
                    },
                    {
                      id: 53,
                      type: 'Composition',
                      titre: 'DU FOND DE L’ABÎME ',
                      contenu: 'Du fond de l’abîme je t’invoque oh Éternel x2, \n' +
                        'Seigneur écoute ma voix que ton oreille soit attentive\n' +
                        ' (à la voix de mes supplications je t’invoque oh Eternelx2)  x2.\n' +
                        '\n' +
                        'Si tu garder les souvenirs des iniquités (seigneur qui pourrait subsister), \n' +
                        'et le pardon se trouve auprès de toi, (afin seigneur qu’on te craigne x2).\n' +
                        '\n' +
                        'J’espère à l’Éternel mon Dieu, mon âme espère en lui, et j’attends sa promesse, mon âme compte sur le seigneur x2',
                      auteur: null
                    },
                    {
                      id: 57,
                      type: 'Composition',
                      titre: 'E BWANA NAJA KWAKO',
                      contenu: 'Ee bwana ninaja kwako, munyonge mimi naja kwako., tazama jisi ninavyo lemewa na mzigo wa zambi zangu x2\n' +
                        '\n' +
                        'Ulipo niona mimi nime potea ndipo kaanza, mbinu zakunitafuta mimi, niliye kua mbali na mungu x2.\n' +
                        '\n' +
                        'Zambi zangu zote, nazi leta golgotha x2 unioshe Ee bwana, kama yule munyanganyi (neema hiyo nakuomba)x2\n' +
                        '\n' +
                        'Wingi wazambi zangu, zina nilemeax2 (unioshe Ee bwana kama yule munyangani) nirizi ufalme wako x2.',
                      auteur: 'Frère DUDOS'
                    },
                    {
                      id: 8,
                      type: 'Composition',
                      titre: 'ÉTERNEL,DIEU DE GLOIRE',
                      contenu: 'Éternel Dieu de gloire nous voici devant toi, ressemblé comme un seul homme pour te célébrer,\n' +
                        '\n' +
                        '-Dans tes parvis seigneur inonde nos cœurs de joie, vient restaure nos vies guéris ton église, nous te louons Éternel, nous te chantons Éternel, nous t’exaltons oh Éternel.\n' +
                        '\n' +
                        '-Nous te magnifions élevons ton nom toi le Dieu de notre salut soit adoré pour l’Éternel.',
                      auteur: 'Frères DUDOS et RAPHAEL'
                    },
                    {
                      id: 20,
                      type: 'Composition',
                      titre: 'ÉTERNEL MON ROI',
                      contenu: 'Éternel eh mon roi, me voici devant ta face pour t’adorer\n' +
                        '-...pour te louer\n' +
                        '\n' +
                        '-Et te chanter un chant d’amour, plein des gratitudes, \n' +
                        'pour tous ce que tu as fait dans ma vie, \n' +
                        'À jamais oh mon Dieu, je ne t’oublierais, \n' +
                        'toi la source de mon salut mon cœur t’adore (x2)\n' +
                        '\n' +
                        '-Reçois l’adoration et la louange qui proviennent du fond de mon cœur, mon espérance et ma force c’est toi Jésus à jamais eh soit adoré (x2)\n' +
                        '\n' +
                        '-Tu es digne(x3) o Seigneur,\n' +
                        '-Tu es le roi (x3) o seigneur,\n' +
                        '-Nous te levons (x3) o seigneur,\n' +
                        '-Nous t’acclamons (x3) o seigneur.\n' +
                        '-reçois l’adoration et...',
                      auteur: 'Frère DUDOS'
                    },
                    {
                      id: 1,
                      type: 'Composition',
                      titre: 'ET SI MON AME',
                      contenu: 'Si mon âme fonde à larmes, \n' +
                        'Suite aux douleurs de la vie ; \n' +
                        '\n' +
                        'je sais que\n' +
                        'mon rédempteur est vivant.\n' +
                        '\n' +
                        'Mon sauveur dans sa largesse.\n' +
                        'Il m’embrasse dans \n' +
                        'toute ma tristesse.\n' +
                        '\n' +
                        'Dans l’abondance \n' +
                        'de sa sagesse.\n' +
                        'Rafraîchi mon âme \n' +
                        'dans toute sa sécheresse\n' +
                        '\n' +
                        'Il est ma promesse. \n' +
                        'Tout le temps  de mon angoisse.\n' +
                        '\n' +
                        " C'est lui ma richesse.\n" +
                        ' Tout le temps, \n' +
                        'la pauvreté dans sa vitesse\n' +
                        '\n' +
                        'Seigneur je t’adore, \n' +
                        'ton nom  je redore. \n' +
                        'Ta présence me restaure. \n' +
                        'Seigneur je t’adore\n' +
                        '\n' +
                        'Par ton sang ma vie est arrosée. \n' +
                        'Je suis devenu une rosée. \n' +
                        'Qui est née de l’aurore \n' +
                        'Suis devenu une rose.',
                      auteur: 'Frère RAPHAEL'
                    },
                    {
                      id: 13,
                      type: 'Composition',
                      titre: 'EVERY DAY',
                      contenu: '-Every day to night, when everything arrest, I see the moon stars in heaven it shows your majesty, you are the king of kings the alpha and omega, your name is higher and higher we still believe in you.\n' +
                        '\n' +
                        '-Every day, every time, you are the only god, we still believe in you, we rise up hands we glorify your name, glory to your name.\n' +
                        '\n' +
                        'R/-You are wonderful, you are great full, you are power full I glorify your name\n' +
                        '\n' +
                        '-I desire your presence, I desire to praise your name, fill me god, fill me god I want be like you.\n' +
                        '\n' +
                        'R/-Tu es merveilleux, tu es le plus grand, tu es le tout puissant, je glorifie ton nom.\n' +
                        '\n' +
                        '-Tu as soumis toutes les divinités, tu es le roi des rois, et ton règne c’est vraie na pas de fin, tu es merveilleux pour toujours. Nos mains levées nous contemplons ta splendeur, tu es le prince de vie, toi qui règne dans la justice, tu es merveilleux pour toujours.',
                      auteur: 'Frère JIMMY'
                    },
                    {
                      id: 56,
                      type: 'Composition',
                      titre: 'FANYIYENI BWANA SHNAGWE',
                      contenu: 'Fanyieni bwana shangwe dunia yote, mtumikiebwana mungu kwa furaha kuu, njoni mbele zake bwana kwa kuimba, jueni kwamba bwana ndiye mungu.\n' +
                        '\n' +
                        'Yeye aliye tuumba nasi tuwake, watu wake kondoo wa malisho yake, ingieni malangono kwaku shukuru nyuani mwake bwana kwaku msifu.\n' +
                        '\n' +
                        'Mushukuruni lihimidini jina lake kwakua bwana nimwema ni mwema siku zote, rehema zake niza milele milele nimwaminifu kwa vizazi vyote x2',
                      auteur: null
                    },
                    {
                      id: 34,
                      type: 'Composition',
                      titre: 'HATA DUNIA I KATAE',
                      contenu: 'Hata dunia ikatae, na wafalme wote wa katae  eh (nita kusifu)\n' +
                        '\n' +
                        'Uliniumba kwa mfano wako, nita kusifu, upendo wako wanijawa moyo, nina kusifu\n' +
                        '\n' +
                        'Na kusifu uh, na kusifu, na kusifu\n' +
                        'Na kupenda...\n' +
                        'Na kwinua ah...',
                      auteur: 'Frère DUDOS'
                    },
                    {
                      id: 2,
                      type: 'Composition',
                      titre: "IL M'A TANT AIMÉ",
                      contenu: 'Il est mon bien aimé. Ami fidèle. Qui peut me dire t’aime\n' +
                        '\n' +
                        '-il me ravive. Jésus la source vive. Eau de vie. Qui donne essence à ma vie\n' +
                        '\n' +
                        '-Le lion de la tribut de Judas. Étoile du matin le rocher des âges. Qui me dit à jamais je t’aimerais. ',
                      auteur: 'Frère RAPHAEL '
                    },
                    {
                      id: 9,
                      type: 'Composition',
                      titre: 'IL Y A ENCORE DU TEMPS',
                      contenu: 'Il y a encore du temps pour tout recommencer, il y a encore du temps rien n’est perdus, il y a encore du temps pour être régénéré, et faire un nouveau départ avec jésus\n' +
                        '\n' +
                        'Vient mon frère (ma sœur) sa grâce est disponible, le sang de l’agneau immolé est là pour te rendre pur et tu seras pardonné de tes péchés et Jésus fera de toi sa demeure',
                      auteur: 'Frère DUDOS'
                    },
                    {
                      id: 5,
                      type: 'Composition',
                      titre: "J'AI CHANGÉ MON IDENTITÉ",
                      contenu: 'J’ai changé mon identité, je ne suis plus d’ici bas j’ai changé, désormais je suis déclaré patriote de la nouvelle Jérusalem\n' +
                        '\n' +
                        '-Toute mon histoire a changé, Toute mon identité a changé, c’est ne plus moi qui vie, c’est alors le Christ en moi.\n' +
                        '\n' +
                        '-Oh Jérusalem, nous chanterons à l’unisson notre cantique triomphal, hosanna à l’agneau de Dieu.',
                      auteur: null
                    },
                    {
                      id: 24,
                      type: 'Composition',
                      titre: "J'ENTENDS UNE DOUCE MELODIE",
                      contenu: 'J’entends une douce mélodie, qui traverse les airs de toutes parts, les oiseaux des cieux la fredonnent, les poissons  mers c’est la chuchote, les animaux redisent le même refrain oui Jésus christ nous aime \n' +
                        '\n' +
                        '-Toutes ces créatures célèbrent sa grandeur, sa puissance transparaît dans la magnificence de ses œuvres créatures de Dieu fruit de son amour objet de la fierté divine\n' +
                        '\n' +
                        '-La voix douce redit son lassitude, c’est pour toi que le Dieu le fils mourut, sur la croix il fut crucifié et par sa mort la vie te le donne, et que ses meurtrissure te donne la guérison, oui Jésus christ nous aime.\n' +
                        '\n' +
                        'Entends-tu mon ami cette heureuse mélodie veut-tu bien recevoir ce magnifique amour qu’il t’offre et alors tu pourras te joindre à tous les saints, \n' +
                        '-pour chanter le grand amour de jésus,\n' +
                        '-annoncer le grand amour de jésus\n' +
                        '-célébrer le grand amour de jésus',
                      auteur: null
                    },
                    {
                      id: 33,
                      type: 'Composition',
                      titre: 'JE PRÉPARE MA VIE CÉLESTE ',
                      contenu: 'Je prépare ma vie céleste, par ce voyage terrestre, car ma vie ici sur terre est semblable à la fleur, qui le matin fleuri et le soir flétri.\n' +
                        '\n' +
                        'Pèlerin sur cette terre, moi je suis un passager, je ressens les douleurs du voyage et j’endure le labeur du voyage\n' +
                        'Je voyage, auprès de mon père, je désire, revoir mon sauveur, mais j’éprouve beaucoup des contraintes, sur cette terre je suis pèlerin\n' +
                        '\n' +
                        'Et dans ce pèlerinage. Sur cette terre je voyage, le temps est orageux, je fais la roue et je prends courage x2\n' +
                        '\n' +
                        'R// Passager, passager, pèlerin, pèlerin, je cours vers le but, je cours pour remporter le prix x3\n' +
                        'Je ne sais pas le chemin, seigneur montre moi le chemin, je ne sais pas la route, seigneur montre moi la route.\n' +
                        'Amène moi auprès de toi, là où les malheurs n’existent pas, amène moi auprès de toi là où la les douleurs n’existent pas, amène moi auprès de toi là où la peur n’existe plus x2 .\n' +
                        '\n' +
                        'Amène moi sur tes ailles auprès de toi dans la cité sainte, amène moi sur tes ailles auprès de toi dans l’Éternité\n' +
                        '\n' +
                        'R.// : passager passager..\n',
                      auteur: 'Frère RAPHAEL'
                    },
                    {
                      id: 28,
                      type: 'Composition',
                      titre: 'JÉSUS,FILS DE DIEU',
                      contenu: 'Jésus fils de Dieu descendu sur la terre pour te sauver, lui le Dieu très haut vêtus de la haire humaine pour te sauver\n' +
                        '\n' +
                        'Il est né comme un homme il a vécu comme un homme pour te sauver (de la mort)\n' +
                        '\n' +
                        'Par jésus ma vie est blanchie, en lui j’ai mon salut il ma aimé, il a payé ma rançon je n’ai plus peur de rien il ma sauvé\n' +
                        '\n' +
                        'Par sa mort j’ai la vie son sang ma purifié de mes péchés eh (il ma sauvé de la mort)\n' +
                        '\n' +
                        'Il est vivant, il est vivant il est ressuscité, jésus est vivant, il est vivant il est ressuscité.\n' +
                        'On la cloué, on la percé il na rien dit, il est resté fidèle à sa mission jusqu’à la mort \n' +
                        '\n' +
                        'Jésus a souffert pour mes péchés, on la crucifié il na rien dit. ',
                      auteur: 'Frère JIMMY'
                    },
                    {
                      id: 6,
                      type: 'Composition',
                      titre: 'JÉSUS,LA SOURCE VIVE',
                      contenu: 'Jésus la source vive, vient me désaltérer, afin pour toi seul je vive de ta gloire nourris moi.\n' +
                        '\n' +
                        '-Du Jourdain je suis la rive, toi l’amont je suis l’aval, jésus la source vive, lave moi de mon péché.\n' +
                        '\n' +
                        '-Et quand l’orage gronde, et quand l’ouragan fait rage, soit pour moi une oasis, et une terre d’asile \n' +
                        '\n' +
                        'R/ Dans mes faiblesses et ma paraisse, rend moi plus vigoureux, dans mes douleurs et dans ma peur, rassure-moi, je te prie\n' +
                        '\n' +
                        'Dans ma peur et mes douleurs, à Sion qu’afin j’arrive, oui, rassure moi toi le torrent intarissable',
                      auteur: 'Frère RAPHAEL'
                    },
                    {
                      id: 62,
                      type: 'Composition',
                      titre: 'JESUS MY LOVE',
                      contenu: 'Jesus my love, you are my life x2, you are the king of kings, I glorify your name x2, king of peace, lord of lords, you are my seviour\n' +
                        '\n' +
                        'Jésus mon amour, tu es ma vie x2 tu es le roi des rois, je glorifie ton nom x2, prince de paix seigneur de seigneurs, tu es mon sauveur.  ',
                      auteur: 'Frère DUDOS'
                    },
                    {
                      id: 46,
                      type: 'Composition',
                      titre: 'JOUR INOUBLIABLE  ',
                      contenu: 'Aujourd’hui c’est inoubliable jour, Dieu me donne la chaire de ma chaire, j’ai la joie de vivre avec toi mon amour toute ma vie toujours fidèle x2\n' +
                        '\n' +
                        'Vous êtes témoins de cette union infinie, soit maudit ce lui qui mettra fin. Dans la joie la tristesse comme dans les malheurs je resterais toujours fidèle X2\n' +
                        '\n' +
                        'R// ; Cette fleur je dois l’entretenir toute ma vie toute ma vie, cette fleur je dois la soutenir comme Jésus soutient l’église. X2',
                      auteur: null
                    },
                    {
                      id: 42,
                      type: 'Composition',
                      titre: 'KATI HEKALU',
                      contenu: 'Kati hekalu lako takatifu nita kwimbia bwana wangu siku zote. Kati hekalu lako takatifu nita ku sifu bwana wangu siku zote, Kati hekalu lako takatifu nita kwimbia wimbo wa sifa siku zote, x2 \n' +
                        '\n' +
                        'nita kaa nyumbani mwako kwa ku sifu, kwa yote ume tenda maishani mwangu x2\n' +
                        '\n' +
                        'R// Eh yahwe Jehovah jiré, Eh yahwe uinuliwe jina lako ushindi wangu.\n' +
                        'Eh yahwe Jehovah nisi, Eh yahwe uinuliwe jina lako faraja wangu.\n' +
                        'Eh yahwe Jehovah rapha, Eh yahwe uinuliwe jina lako ni nguvu yangu wangu.\n' +
                        '\n' +
                        'Bwana wangu nina kuomba, nifanye mimi mwana wako, niishi nyumbani mwako kama vile samueli, ili nami nionje, Baraka upendo na amani, niishi nyumbani mwako maishani mwangu mwote.\n' +
                        '\n' +
                        'R//...',
                      auteur: null
                    },
                    {
                      id: 51,
                      type: 'Composition',
                      titre: "L'AMOUR DE DIEU",
                      contenu: 'L’amour de Dieu pour toi et loi est plus fort que ce lui des hommes x2\n' +
                        '\n' +
                        'Il ma aimé dès le commencement, il ma choisit pour que je sois son fils x2 Jésus.\n' +
                        'Il ma tant aimé Jésus hi hi, jusqu’à mourir pour moi sur la croix x2\n' +
                        '\n' +
                        'R// Élevons son nom l’agneau immolé. Proclamons sa victoire le roi des rois x2\n' +
                        'Par ses plaies j’ai eu la vie et le salut gratuit quel grand amour\n' +
                        'R//...\n' +
                        'Merci Jésus pour ton amour x3',
                      auteur: 'Frère DUDOS'
                    },
                    {
                      id: 31,
                      type: 'Composition',
                      titre: 'LA RÉDEMPTION',
                      contenu: 'La rédemption, la rédemption, par le plan de la rédemption, \n' +
                        'nous sommes libérés nous sommes affranchis par le plan de la rédemption, l’Agneau immolé a tout expié eh nous voici tous libérés. X2\n' +
                        '\n' +
                        'Libérés, libérés nous chantons la vraie liberté, \n' +
                        'Justifiés, justifiés nous chantons la vraie liberté,\n' +
                        "Purifiés par le sang de l'Agneau, nous chantons la vraie liberté\n" +
                        'Par ses meurtrissures sur les bois maudit, nous avons la vraie liberté\n' +
                        'Libérés x5, par le plan de la rédemption\n' +
                        'Justifiés X5 par le plan de la rédemption.\n' +
                        '\n' +
                        'Avant que le christ n’arrive (nous étions tous condamnés), Israël en captivité (dans le pays de Babylone), il se rappela de Zabulon (il crié à la liberté)\n' +
                        'Libérés x5, par le plan de la rédemption\n' +
                        'Justifiés X5 par le plan de la rédemption',
                      auteur: 'Frère  RAPHAEL'
                    },
                    {
                      id: 14,
                      type: 'Composition',
                      titre: 'LE JOUR DE MA DETRESSE',
                      contenu: '-Le jour de ma détresse tu écoute mes prières, le jour de mes peines, tu te rapproche de moi, quand mes proches m’abandonnent, tu me dis ne crains rien,\n' +
                        '- je serais avec toi tous les jours de ta vie,\n' +
                        'Je serais ton bouclier tous les jours de ta vie ne crains rien\n' +
                        '\n' +
                        '-Dans mes désespoirs,Seigneur tu me rassure, et dans mes peines, c’est toi mon compagnon, quand mes proches \n' +
                        'm’abandonnent, tu me dis ne crains rien,\n' +
                        '\n' +
                        '- je serais avec toi...\n' +
                        ' \n' +
                        '-Dans ma faiblesse immense, ta force manifeste en moi, je ressens le goût de vivre, je me repose sous tes ailles tu me dis mon fils ne crains rien, ma source de joie c’est toi\n' +
                        '\n' +
                        '-R/Mon seul espoir c’est toi, mon bouclier c’est toi, mon porte bonheur c’est toi, mon assurance c’est toi.',
                      auteur: 'Frère JIMMY'
                    },
                    {
                      id: 18,
                      type: 'Composition',
                      titre: 'LEVE-TOI ',
                      contenu: '-lève toi mon frère (ma sœur) et regarde, comment les rimailles de Jérusalem sont détruites,  \n' +
                        '.-...comment les rimailles du Congo sont détruites\n' +
                        '\n' +
                        'Où est Néhémie dans ce pays, qu’il se lève pour rebâtir, ce beau pays et ce temple, le Sion de notre Dieu où inonde sa gloire, et son nom sera élevé à jamais \n' +
                        '\n' +
                        '-Lève-toi mon frère, il est temps (ma sœur) \n' +
                        '\n' +
                        'Je me lèverais et j’irai vers les montagnes, et j’apporterais du bois, et j’en construirais ce temple, le Sion de notre Dieu où inonde sa gloire, et son nom sera élevé à jamais\n' +
                        '\n' +
                        'R/ Que chacun apporte sa pierre pour reconstruire, ce temple, le Sion de notre Dieu. ',
                      auteur: 'Frère DUDOS'
                    },
                    {
                      id: 25,
                      type: 'Composition',
                      titre: "LOUEZ L'ÉTERNEL",
                      contenu: '-Louez l’Éternel car il est bon car sa miséricorde dure à toujours, \n' +
                        '\n' +
                        'Ainsi disent les rachetés de l’Éternel ceux qu’il a délivré de la main de l’ennemi\n' +
                        '\n' +
                        'L’Éternel est élevé au dessus de toutes les nations sa gloire est au dessus des cieux.\n' +
                        '\n' +
                        'Et qui est semblable à l’Éternel notre Dieu il a sa demeure là en haut il rabaisse son regard sur la terre.\n' +
                        '\n' +
                        'Éleve-toi sur les cieux o Dieu et que ta gloire soit sur toute la terre ton œuvre n’est que splendeur magnificence et ta justice subsiste à jamais.',
                      auteur: null
                    },
                    {
                      id: 19,
                      type: 'Composition',
                      titre: 'LOUONS-LE',
                      contenu: 'Louons-le, selon l’immensité de sa grandeur, célébrons-le, il est notre créateur, élevons-le, lui qui nous donne le bonheur, adorons-le, il a mis fin à notre malheur\n' +
                        '\n' +
                        '-Il est le roi, le Dieu de notre salut, il mérite, la louange de nos bouches à jamais, à jamais\n' +
                        '\n' +
                        '-Mon âme loue l’Éternel et n’oublie aucun de ses hauts faits, du griefs du lion il ta arraché, comme dans la maigreur de ton espoir, lorsque tout ta semblé perdus, et le monde ta paru étrange, il est venu sécher les torrents de larmes qui coulait de tes yeux, il a fait de toi une nouvelle créature, il a fait de toi un homme. (Raph vocal)\n' +
                        '\n' +
                        '-Venez venez mes frères, venez mes sœurs, tous les chrétiens du monde, venez oh uh oh, et louons l’Éternel il est incomparable, ses hauts faits nous dépassent, il est le créateur\n' +
                        '\n' +
                        '-oh oh le roi,(x3) nous te louons\n' +
                        '-...nous t’adorons\n' +
                        '-...nous t’acclamons\n',
                      auteur: null
                    },
                    {
                      id: 66,
                      type: 'Composition',
                      titre: 'MAISHA BILA YESU',
                      contenu: 'Maisha bila yesu hayana faida ewe mwanadamu, kumbuka yesu alivyo teswa, kwa ajili ya zambi zako, haya yote alivumilia, ili wewe nami tuokolewe, x2\n' +
                        '\n' +
                        'Kumbuka bwana yesu musalabani, alivyo teswa kwa nini mwanadamu una mwasi mungux2\n' +
                        '\n' +
                        'R// Sija pata mwengine kama yesu, eh ewe Elshadai ukae ndani yangu x2,\n' +
                        ' ili moyo wangu utulie, nipate kuishi na amani, \n' +
                        'bila wewe mimi sina raha,\n' +
                        ' pamoja nawe mimi nina raha.',
                      auteur: null
                    },
                    {
                      id: 23,
                      type: 'Composition',
                      titre: 'MA MISSION',
                      contenu: 'Comme tu ma envoyé dans le monde, moi aussi je les envoie dans le monde (x2)\n' +
                        '\n' +
                        '-Nous somme envoyé dans le mode pour prolonger la mission de notre seigneur Jésus montrer le chemin du salut aux autres afin que nous rendions vivantes les âmes mortes ouh ouh ouh ouh ouh ouh\n' +
                        '\n' +
                        '-Nous (tu) avons été conçus pour accomplir une mission, je dois aller jusqu’au bout, de ma mission, et achever la tache que ma conféré le seigneur Jésus.\n' +
                        '\n' +
                        '-Je (tu) veux faire de toutes les nations dès disciples, les baptisant au nom du père du fils et du saint esprit, et leur enseigner à observer tous ce que, ma prescrit mon seigneur Jésus christ ou oh ou oh ouh ou oh ou oh  ',
                      auteur: 'Frère DUDOS'
                    },
                    {
                      id: 26,
                      type: 'Composition',
                      titre: 'MERCI SEIGNUR',
                      contenu: 'Dans ta présence me voici seigneur pour te dire merci pour tout\n' +
                        '\n' +
                        'Je lève mes mains pour te dire merci merci seigneur pour tout\n' +
                        '\n' +
                        'I raise my hands to worship you I say thank you for all\n' +
                        '\n' +
                        'For the rest for health for the lame of god I say thank you for all\n' +
                        '\n' +
                        'I could die in my sins but you saved me I say thank you for all\n' +
                        '\n' +
                        'Didn’t have any hop at all you coved me I say thank you for all\n' +
                        '\n' +
                        'Even thought I cant forget your love for me I say thank you for all. ',
                      auteur: 'Frère RAPHAEL'
                    },
                    {
                      id: 58,
                      type: 'Composition',
                      titre: 'MIMI MSAFIRI',
                      contenu: 'Ni msafiri hapa duniani kweli (uniongoze safarini mwangu), na safiri kwenda mbinguni huko (uniongoze safarini mwangu),\n' +
                        '\n' +
                        'Giza kuu hapa duniani kweli (uniongoze safarini mwangu), michongomwa visiki njiani humo (uniongoze safarini mwangu),\n' +
                        '\n' +
                        'R// : Bwana wangu bwana, (Bwana wangu) uniongoze, uniongoze bwana (uniongoze,) uniongoze safarini mwangux2',
                      auteur: null
                    },
                    {
                      id: 67,
                      type: 'Composition',
                      titre: 'MUKE MWEMA',
                      contenu: 'R// Urizi na mali mutu huvipata kwa babaye lakini muke mwema hutoka kwa mungu x2.\n' +
                        ' \n' +
                        'Twa shangilia ushindi huu, sababu ujana nikipindi nzito, jiunge nasi tushangilie x2\n' +
                        '\n' +
                        'Muwaachie vijana uhuru wakuchagua, musimukaze mutu kupenda mwengine \n' +
                        'upendo wakweli watoka rohoni\n' +
                        '\n' +
                        'Jameni leo nishangwe kuu (ni shangwe) kuona vijana wame funga ndoa (wameshinda ujana)\n' +
                        '\n' +
                        'Katolika (Fulani) hakumupata muke huu  aumonerie Fulani amemupata muke (huh u)',
                      auteur: null
                    },
                    {
                      id: 49,
                      type: 'Composition',
                      titre: 'NITA LI INUWA JINA LAKO',
                      contenu: 'Nita liinuwa jina lako bwana, nita kuimidi yesu, kwa miujiza ume nitendea, ninapo tazama tangu kuzaliwa kwangu paka leo ni neema yako\n' +
                        '\n' +
                        'R// Nitazamapo mahali nina toka na mahali nilipo sasa, nina shindwa kuelewa ukuu wako bwana\n' +
                        '\n' +
                        'Nasema asante tena kwako eh mungu kwaku twanzisha mwaka huu mupya, twa uanza pia na matatizo oh, lakini hakuna kitu ambacho kitatutisha kwani we mungu mulinzib wetu x2\n' +
                        'R//...\n' +
                        '\n' +
                        'Mwaka ulio pita nilikumbwa na shida, matatizo mateso mengi, lakini ewe mungu kwa hayo yote ulitutia moyo na utulivu x2\n' +
                        'Twasema asante kwaulinzi wako bwana jina lako bwana libarikiwe..',
                      auteur: null
                    },
                    {
                      id: 65,
                      type: 'Composition',
                      titre: 'NITA LISIFU',
                      contenu: ' 1. Nitalisifu jina lako bwana wangu, kutangaza ushindi wako mahali pote x2\n' +
                        'Hata mbele ya myungu mingine nita tangaza uko mungu, dunia nzima ijue kwamba uko mungu\n' +
                        '\n' +
                        '2. nita inua jina lako bwana wangu, kushuhudia ushindi wako nyakati zotex2 \n' +
                        'Hata wafamlme wa dunia wakukatae nita tangaza dunia nzima ijue kwamba uko mungu x2\n' +
                        '\n' +
                        'Dunia nzima ijue kwamba wewe ndiwe mungu asiye shindwa x2,\n' +
                        ' aliye shusha moto wakati wa elia, naku ya gawanya maji wakati wa musa, aliye fufua dorika wakati wa petro, anaye ya pigania maisha yetu x2;\n' +
                        '\n' +
                        'Uinuliwe uinuliwe milele, hubadiliki wabaki mungu daima x2.',
                      auteur: null
                    },
                    {
                      id: 59,
                      type: 'Composition',
                      titre: 'NJONI TU MUFISU BWANA',
                      contenu: 'Njoni tumusifu bwana,tutape ukuu wake x2, kwani mbingu nayo inchi ya jaa sifa zake x2 ;\n' +
                        'alituumba kwamfano wake ili tumutumikie x2,\n' +
                        ' peke yake astahili, sifa zamidomo yake x2\n' +
                        '\n' +
                        'R// Jehovah mungu wa israel,tunashuka mbele yako twakusujudia wewe x2, tuna tangaza ushindi wako musalabani dunia nzima ikujue wewe, kupitia sisi vyombo vya sifa zako x2\n' +
                        '\n' +
                        '(s) Yesu yeye ni yote katika   yote x2, :mwamba wa wote, muumba wa vyote, kimbilio lavizazi vyote wakati wote eh eh (anastahili sifa siku zote).\n' +
                        '\n' +
                        'Uwabudiwe bwana ah upendo wako niwaajabu kwetu\n' +
                        'Usujudiwe bwana ah, upendo wako niwaajabu kwetu.\n' +
                        'Pokea sifa...\n' +
                        'Uinuliwe...',
                      auteur: 'Frère DUDOS'
                    },
                    {
                      id: 39,
                      type: 'Composition',
                      titre: 'NOUS TE LOUONS JÉSUS',
                      contenu: 'Nous te louons Jésus, nous t’exaltons oh Dieu, pour toute ta bonté et pour toute ta gloire, tu nous a tous protégé, tu es notre bouclier, nous te louons Jésus reçois nos  louanges\n' +
                        '\n' +
                        'Aie pitié des orphelins, aie pitié des déplacés, aie pitié de tes enfants, protège ton église, donnes nous l’espérance, donnes nous l’unité, malgré nos faiblesses, écoute nos prières.\n' +
                        '\n' +
                        'Sanctifié sois-tu Dieu, car nos ennemis tu les a confondus, et pour toute ta gloire, reçois nos prières x2.',
                      auteur: null
                    },
                    {
                      id: 27,
                      type: 'Composition',
                      titre: 'NOUS VOICI',
                      contenu: 'Seigneur nous voici, devant ton trône de grâce\n' +
                        '\n' +
                        'Nous adorons oh ton saint nom devant ton trône de grâce\n' +
                        '\n' +
                        'Tu as écrasé l’orgueil des princes de ce monde, tu as détruit nos ennemis et tu nous a libéré toi qui règne dans la louange et l’adoration de ton peuple soit adoré à jamais o roi des roi. ',
                      auteur: 'Frère DUDOS'
                    },
                    {
                      id: 10,
                      type: 'Composition',
                      titre: 'NOUS VOICI EN JÉRUSALEM',
                      contenu: '-Seigneur nous voici en Jérusalem, selon tes promesse nous sommes réunis, nous voulons être tes témoins dans le monde\n' +
                        '\n' +
                        '-Esprit des miracles esprit de force, nous -voulons marcher avec toi tous les jours\n' +
                        '…nous voulons chanter avec toi tous les jours\n' +
                        '…nous voulons prêcher avec toi tous les jours \n' +
                        '\n' +
                        'R// Sans ton esprit nous ne pouvons rien envoie esprit saint esprit de force.\n' +
                        'Vient esprit de Dieu, vient souffle un vent nouveau, \n' +
                        'Vient et remplie ton église de ta puissance o esprit de Dieu vient sur nous.',
                      auteur: 'Frère DUDOS'
                    },
                    {
                      id: 50,
                      type: 'Composition',
                      titre: 'O DIEU NE RESTE PAS',
                      contenu: 'O Dieu ne reste pas dans les silences, ne te tais pas et ne te repose pas O Dieu car voici tes ennemis s’agitent, ceux qui te haïssent lèvent la tête, ils forment contre ton peuple des projets plein des ruses et ils délibèrent contre ceux que tu protège x2\n' +
                        '\n' +
                        'Couvre leurs faces d’ignominie, afin qu’ils cherchent ton nom O Éternel, qu’ils soient confus et épouvantés pour toujours, qu’ils soient honteux et qu’ils périssent, qu’ils sachent que toi seul dont le nom et l’Éternel, tu es le très haut sur toute la terre.\n' +
                        '\n' +
                        'Tu es le seul Dieu tout puissant ah ah, ta miséricorde dure à jamais x4\n' +
                        '\n' +
                        'A jamais eh eh eh.',
                      auteur: null
                    },
                    {
                      id: 40,
                      type: 'Comosition',
                      titre: 'PALE AMBAPO',
                      contenu: 'Pale ambapo akili zangu zaishia, ndipo zako zaanzia\n' +
                        'Matendo yako bwana yapita, fahamu zawanadamu\n' +
                        '\n' +
                        'Pale ambapo nguvu zangu zaanzia. Ndipo wewe unatenda\n' +
                        'Pale ambapo watu wana nicheka, ndipo wa  nipa ushindi.\n' +
                        '\n' +
                        'Katika unyonge wangu mimi ndipo nguvu zako bwana, zinapo onekana ndani yangu, neema yako yani tosha.\n' +
                        'Neema yako yani tosha (katika shida, tabu...)',
                      auteur: null
                    },
                    {
                      id: 21,
                      type: 'Composition',
                      titre: 'POKEYA SIFA',
                      contenu: 'Pokea sifa na heshima, wewe ndiwe mungu muumbaji, mbingu na yo inchi pia nyota, ni kazi ya mikono yako mungu\n' +
                        '\n' +
                        '-Yako mungu uli tuumba kwa mufano wako oh oh oh oh, uka tu tofautisha na wa nyama ah ah, \n' +
                        '\n' +
                        '-Acha tu ku sifu, wewe wa stahili, kuabudiwa na viumbe vyote,\n' +
                        '-Acha tu kuinue...\n' +
                        '-Acha tukuabudu...\n' +
                        '\n' +
                        '-Kama Miriamu uh uh alivyo kuusifu, wa lipo ivuka ah ah, bahari ya shamu (x2), ndivyo hivyo nasi, twa ku sifu Ee Ee Ee bwana h.',
                      auteur: 'Frère DUDOS'
                    },
                    {
                      id: 11,
                      type: 'Composition',
                      titre: 'POUSSONS DES CRIS DE JOIE',
                      contenu: '-Poussons les cris de joie à Jésus notre sauveur, il vainquit la mort le sauveur de nos cœurs\n' +
                        '\n' +
                        "-Il n'est plus dans le tombeau, il est réussite, tous les chrétiens du monde, célèbre sa victoire, que le sceptre de sa gloire soit élevé à jamais, à jamais eh à jamais\n" +
                        '\n' +
                        'R// par sa mort nous avons la vie et le bonheur, il a établi son règne dans nos cœurs, dans nos cœurs, dans nos cœurs.',
                      auteur: 'Frère DUDOS'
                    },
                    {
                      id: 48,
                      type: 'Composition',
                      titre: 'QUAND JÉSUS FUT BAPTISÉ',
                      contenu: 'Quand Jésus fut baptisé dans les eaux de Jourdain par l’envoyé de Dieu Jean baptiste, une voix retentis dans le ciel qui déclara, celui-ci est mon fils mon bien-aimé x2\n' +
                        '\n' +
                        'Le baptême mon frère pour ceux qui croient qui sont purifiés par les sangs de l’agneau, le baptême est un signe de croyance à la parole de Dieu combat le bon combat de la foi. X2\n' +
                        '\n' +
                        'Qui as témoigné pour toi, qui témoigne, qui témoignera pour toi lors de ton baptême x2',
                      auteur: null
                    },
                    {
                      id: 29,
                      type: 'Composition',
                      titre: 'ROHO,NAFSI',
                      contenu: 'Roho, nafsi mwili pia viendelee ku geuzwa na wewe kwa uwezo wa roho mutakatifu, roho yangu, nafsi yangu, mwili pia viendelee ku geuzwa na wewe kwa uwezo wa roho mutakatifu.\n' +
                        '\n' +
                        'Bwana uya ongoze maisha yangu, bwana unipe kuku penda (x2)\n' +
                        '\n' +
                        'Mawazo yangu, matendo yangu, viendelee kugeuzwa na wewe kwa uwezo wa roho mutakatifu x2\n' +
                        '\n' +
                        'Bwana nieleweshe mateso yako, bwana unipe kuvundjika X2\n' +
                        '\n' +
                        'Neno lako liwe taa Kwa miguu yangu, na nuru kwa njia zangu, niketi nyumbani mwako siku zote, nikutumikie X2\n' +
                        '\n' +
                        'Roho, nafsi mwili pia viendelee ku geuzwa na wewe kwa uwezo wa roho mutakatifu, roho yangu, nafsi yangu, mwili pia viendelee ku geuzwa na wewe kwa uwezo wa roho mutakatifu.\n' +
                        'Bwana uya ongoze maisha yangu, bwana unipe kuku penda (x2)   ',
                      auteur: 'Frère JIMMY'
                    },
                    {
                      id: 35,
                      type: 'Composition',
                      titre: 'SEIGNEUR NOUS VOICI',
                      contenu: 'Seigneur nous voici devant ton trône de grâce X4\n' +
                        '\n' +
                        'R// Nous élevons ton saint nom devant ton trône de grâce,\n' +
                        '\n' +
                        'Nous adorons ton saint nom devant ton trône de grâce\n' +
                        '\n' +
                        'Tu as écrasé l’orgueil des princes de ce monde, tu as détruit nos ennemis et tu nous a libéré, toi qui règne dans la louange et l’adoration de ton peuple, soit adoré à jamais o roi des rois\n' +
                        '\n' +
                        'Tu na ni début ni fin de ta vie, tu es Alpha et Omega, tout les anges du ciel t’adorent, les vingt quartes vieillards  se prosternent devant toi\n' +
                        '\n' +
                        'A ton ordre toute la création, obtempère tu règne sur tout.\n' +
                        '\n' +
                        'R//...',
                      auteur: 'Frère DUDOS'
                    },
                    {
                      id: 41,
                      type: 'Composition',
                      titre: 'SHANGAA SANA',
                      contenu: 'Na shangaa sana kwa pendo lake yesu, ameniokoa eh toka zambi zangu, kwa damu yake leo mimi nime wekwa huru kabisa x2\n' +
                        '\n' +
                        'Amenipenda sana ameniokoa eh, nita mu fuata yesu maisha yangu yote, nanita mwimbia eh alleluia hozana asifiwe. X2\n' +
                        '\n' +
                        'R//  kweli bwanani mwenye rehema amenitendea ajabu kabisa, sita mwacha kwa maisha yangu nita mwimbia hozana asifiwe x2\n' +
                        '\n' +
                        'Tena rehema rehema yeyeye x4.',
                      auteur: null
                    },
                    {
                      id: 12,
                      type: 'Composition',
                      titre: 'SIFA NI ZAKO',
                      contenu: '-Sifa ni zako utukufu ni wako,\n' +
                        'Ulitupenda uupendo wa ajabu, \n' +
                        'kamutoa mwana wako wa pekee,\n' +
                        'Ili afe musalabani atuokoe,\n' +
                        'kwa furaha ya wokovu twa shangilia\n' +
                        '\n' +
                        '-Uinuliwe bwana na viumbe vyote duniani,\n' +
                        'Uabudiwe bwana na viumbe vyote duniani',
                      auteur: 'Frère DUDOS'
                    },
                    {
                      id: 69,
                      type: 'Composition',
                      titre: 'SIMAMENI TUMSIFU BWANA',
                      contenu: 'Taifa la bwana simameni tumusifu bwana, tumwimbie wimbo wa sayunix3\n' +
                        '\n' +
                        'Vigele gele he he sifa kwa mungu wetu, vigele gele he he sifa siku zote, vigele gele he he sifa hakuna kama yeye.\n' +
                        '\n' +
                        'Mungu ame tenda mambo ya ajabu katika maisha yetu ndugu yangu          -ametupa uhai wake leo (bure)\n' +
                        '\n' +
                        '-Ametulinda toka zambi (bure)\n' +
                        '\n' +
                        'R...\n',
                      auteur: null
                    },
                    {
                      id: 3,
                      type: 'Composition',
                      titre: 'SOUS LE SOLEIL',
                      contenu: '-sous le soleil tous que tu peut faire autant courir après le vent, le soleil de l’orient se lève et à l’occident il se couche, et les hommes passent rien ne demeure, sous le soleil rien ne vie plus d’un jour.\n' +
                        '\n' +
                        '-Tend moi ta main seigneur ma vie comme l’aigle qui vole, apprend moi la sagesse pour un choix rationnel, de mon sort je n’en sais rien seigneur je me confie en toi\n' +
                        '\n' +
                        '-Vanité des vanités sous le soleil tous est dérisoire, de l’amour, de la haine, sous le soleil je ne sais pas mon sort.\n' +
                        '\n' +
                        '-Ce que je veux seigneur ;\n' +
                        'Je veux t’aimer te tout mon cœur, je veux t’aimer de toute mon âme. \n' +
                        'Et à toi seul seigneur, je veux rendre un culte, car sous le soleil, tous ce qui y est  est vanité.',
                      auteur: 'Frère RAPHAEL'
                    },
                    {
                      id: 32,
                      type: 'Composition',
                      titre: 'TOUTES LES VOIES DE DIEU',
                      contenu: 'Toutes les voies de Dieu, sont bonté et fidélité, pour ceux qui suivent toutes les règles de son alliance x2\n' +
                        '\n' +
                        'R// Il reste juste dans sa justice envers leur justesse, il les fait vivre et leur montre le chemin à suivre x2, il leur dit rester en silence et faites moi confiance.\n' +
                        '\n' +
                        'Leur salaire x3, c’est ce que l’œil n’a jamais vu\n' +
                        '(Ts) ce que l’œil na jamais vu et l’oreille jamais entendu, l’esprit de l’homme jamais soupçonné, c’est la part de ceux qui le craignent.',
                      auteur: 'Frère RAPHAEL'
                    },
                    {
                      id: 54,
                      type: 'Composition',
                      titre: 'TOUTES MES SOURCES',
                      contenu: 'Toutes mes sources sont en toi, tu me réjouis dans ta présence, mon âme a soif de toi, mon cœur soupire après toi, dans le désert trop brûlant de silence. \n' +
                        '\n' +
                        'Toutes mes sources sont en toi, tu me réjouis dans ta présence, mon âme espère en toi, tu es mon abri tu es mon assurance, \n' +
                        '\n' +
                        'Dieu tout puissant, seigneur mon maître, ami fidèle tendre père mon berger, amour si grand qui rempli mon être du bonheur de pouvoir te rencontrer.',
                      auteur: null
                    },
                    {
                      id: 36,
                      type: 'Composition',
                      titre: 'TU ES DIEU DIGNE',
                      contenu: 'Tu es Dieu digne de louange, ton nom est adoré parmi les anges et tous les humains toi le rocher des âges x2\n' +
                        '\n' +
                        'Majesté eh o roi vit pour toujours o Dieu de gloire règne,\n' +
                        '\n' +
                        'Mon sauveur eh, oh roi vit pour toujours oh Dieu de gloire règne\n' +
                        '\n' +
                        'Dans mon cœur dans ma vie\n' +
                        'Majesté eh oh roi vit pour toujours oh Dieu de gloire règne \n' +
                        '\n' +
                        'Mon sauveur eh, oh roi vit pour toujours oh Dieu de gloire règne à jamais',
                      auteur: 'Frère DUDOS'
                    },
                    {
                      id: 15,
                      type: 'Composition',
                      titre: 'TU PEUX COURIR ',
                      contenu: 'Tu peux courir ça et là partir à la recherche du bonheur\n' +
                        '-...partir à la recherche de la gloire\n' +
                        '-tu peux même vivre le bonheur sans te souciez de ton créateur\n' +
                        '(tous) mais le monde passe avec ses convoitises.\n' +
                        '\n' +
                        '-Ne vous souciez pas du bonheur de ce monde, mais vivez comme Dieu vous le demande, il n’y a pas le vrai bonheur sur la terre, le vrai bonheur demeure en Jésus christ\n' +
                        '\n' +
                        '-Écoute mon frère, tu n’es point de ce monde, ta vie sur terre c’est comme un long voyage, le chemin est pénible et plein des tentations, il te faut marcher, il te faut du courage,\n' +
                        '\n' +
                        '-N’aimez point le monde ni le plaisir du monde, car le monde passe avec ses convoitises.',
                      auteur: 'Frère JIMMY'
                    },
                    {
                      id: 16,
                      type: 'Composition',
                      titre: 'U ABUDIWE',
                      contenu: 'Uabudiwe, Uinuliwe, usujudiwe eh bwana milele,\n' +
                        ' \n' +
                        '-Twainua mimono yetu kulisifu Jina lako, twa shuka kwa ma goti kutangaza ukubwa wako.\n' +
                        '\n' +
                        '-Hakika wewe ni bwana Wa stahili kuabudiwa, mbingu nazo inchi ni kazi ya mikono yako, utukufu Sifa na heshima vyote ni vyako\n' +
                        '\n' +
                        'R/- Acha nikuabudu, acha niku inuwe, acha niku imbie wewe, nili inuwe jina lako, sifa zote ni zako, uinuliwe milele na milele\n' +
                        '\n' +
                        '-Ni somapo maandiko, na ona kwamba wewe, ni mungu wa miungu na viumbe vyote, hauna mwanzo wala mwisho wa maisha ya ako, uinuliwe milele na milele,\n' +
                        '\n' +
                        '-wewe ni alpha tena omega uinuliwe milele na milele\n' +
                        '\n' +
                        '-Les 24 vieillards se prosternent devant toi, et disent que tu es digne de recevoir, l’honneur et la gloire, et nous qui sommes sur terre, nous élevons nos voix, vers toi père, vers toi Jésus, reçois nos louanges.',
                      auteur: 'Frère JIMMY'
                    },
                    {
                      id: 64,
                      type: 'Composition',
                      titre: 'ULI ACHA UTUKUFU',
                      contenu: 'Uliacha utukufu na heshima juu mbinguni uka shuka duniani twasema (asante bwana), ukazarauliwa nakuya vumilia mateso ili mimi niokolewe  (asante bwana) kachukua laana zangu na zambi zangu zote nisemenini mimi hi hi  (asante bwana)\n' +
                        '\n' +
                        'Ninapo tazama mambo unayo tenda maishani mwangu na sema  (asante bwana), wewe una nilinda usiku na muchana niseme nini mimi hihi, (asante bwana)waongoza mi guu yangu katika njia zote waniandalia meza mbele ya adui zangu nasema  (asante bwana)\n' +
                        'Uabudiwe mwamba milele (Uabudiwe bwana)\n' +
                        'Uinuliwe mwamba milele he (uinuliwe bwana)\n' +
                        'Usujudiwe mwamba milele he (usujudiwe bwana)\n' +
                        '\n' +
                        'R// Wewe wastahili:\n' +
                        '    • kuabudiwa nami\n' +
                        '    • kushukuriwa nami\n' +
                        '    • kuinuliwa nami',
                      auteur: null
                    },
                    {
                      id: 55,
                      type: 'Composition',
                      titre: 'U NI BADILISHE BWANA',
                      contenu: 'R// Unibadilishe bwana na neno lako nisi ondoke kanisani kama vile nilivyo ingia x2, niongoze bwana na safarini mwangu, natakatu nibadilishwe na wewe X2\n' +
                        '.\n' +
                        '(S) maubiri yaubiriwa hazarani kaka(dada) yangu kusudi la mungu ili wewe ubadilike x2, kwanini baba (mama) hutaki kubadilika, nibadilishe yesu oh mungu wangu natakatu kubadilishwa na wewe x2\n' +
                        '.\n' +
                        'Ee mungu wa upendo na mwenye rehema tele unisaidie nisi anguke tena x2, shetani wewe nasitaki tena kukufuata tena, mungu wangu muondoe mbali nami x2, nisaidie yesu eh mungu natakatu nibadilishwe na wewe x2.\n' +
                        '\n' +
                        'Maombi yangu yawekwe kama uvumba mbele yako, uchunge mulango wa midomo yangu, usi sukume moyo wangu kwa kitu kibaya x2.\n' +
                        '\n' +
                        'Macho yangu ni kwakotu, Ee mungu baba nakutumainia wewe usiache nafsi yangu x3. ',
                      auteur: 'Frère DUDOS'
                    },
                    {
                      id: 30,
                      type: 'Composition',
                      titre: 'VIENS CONSOLER',
                      contenu: ' Seigneur mon Cœur est lourd, mon ciel est noir et le monde plein d’ombres. Bis.\n' +
                        '\n' +
                        'R/ viens consoler nos âmes brisées, viens consoler nos âmes fatiguées, viens consoler nos âmes déchirées.\n' +
                        '  \n' +
                        'Sers-moi contre ton cœur, je t’ouvre mon cœur pour une vie sans terreur (x4).\n' +
                        'R// :………\n' +
                        'Marches à ma présence :\n' +
                        '- du lever du soleil\n' +
                        'Jusqu’à son coucher eh\n' +
                        '-chaque jour qui se lève\n' +
                        'Chaque nuit qui vient\n' +
                        '-colonne de feu\n' +
                        'Chaque nuit qui vient\n' +
                        '-colonne de nuée\n' +
                        'Chaque jour qui vient\n' +
                        'R// :………',
                      auteur: 'Frère RAPHAEL'
                    },
                    {
                      id: 37,
                      type: 'Composition',
                      titre: 'VIENS,SEIGNEUR',
                      contenu: 'Viens seigneur, viens Jésus, viens Esprit remplie ce lieu x2\n' +
                        'Nous voici devant toi, pour célébrer ta gloire Jésus,\n' +
                        ' reçois l’adoration,\n' +
                        ' reçois louange Jésus,\n' +
                        ' tu as vaincu la mort.\n' +
                        '\n' +
                        'Onction de Dieu, Esprit divin, règne au milieu de nous, souffle sur tes enfants prosternent devant toi pour t’adorer. X2\n' +
                        '\n' +
                        'Remplie ce lieu de ta présence, nous voulons te suivre, l’honneur la puissance et la gloire t’appartiennent eh eh eh, l’honneur la puissance et la gloire tappartiennentx2\n' +
                        '\n' +
                        'Viens esprit de Dieu, remplie ce lieu (nos vies) de ta puissance de ta force x4\n' +
                        'Oui vient saint esprit oh oh\n' +
                        '\n' +
                        'Onction de Dieu, esprit du divin souffle sur nous x3',
                      auteur: 'Frère JIMMY'
                    },
                    {
                      id: 63,
                      type: 'Composition',
                      titre: 'VIUMBE VYOTE',
                      contenu: 'Viumbe vyote vya tangaza ya kwamba (hakuna kama wewe), waimbaji nao wasema ah ah, (hakuna kama wewe), dunia nzima ya shuudia ya kwamba (hakuna kama wewe),\n' +
                        '\n' +
                        'Basi nakila mwenye, mwenye pumzi x2\n' +
                        '\n' +
                        'Amusifu bwana hallelui',
                      auteur: null
                    },
                    {
                      id: 45,
                      type: 'Composition',
                      titre: 'VOUS ÊTES MARIÉ ',
                      contenu: 'Aujourd’hui vous êtes maries, devant Dieu et devant l’église, soyez unis pour la vie, pour le meilleur et pour le pire, et que personne ne sépare ce que Dieu a déclare joint oh soyez unis pour la vie, pour le meilleur et pour le pire.\n' +
                        '\n' +
                        'L’homme quittera son père et sa mère et s’attachera à sa femme et ils deviendront une même chaire unis par l’amour du christ, je veux mon père et ma mère et m’attachera à ma femme oh et nous deviendrons une même chaire unis par l’amour du christ\n' +
                        '\n' +
                        'Le mariage est une institution, destiné à toi mon amour, tu ma aimé tu ma choisi unis par l’amour du christ.\n' +
                        '\n' +
                        'Celui qui trouve une femme, il a trouvé, la chose utile pour sa vie, tu ma aimé, tu ma choisi, tu ma ouvert ton cœur je veux t’aimer jusqu’à la mort.\n' +
                        '\n' +
                        'Tu ma aimé, tu ma choisi, et moi je veux t’aimer tous les jours de ma vie  jusqu’à la mort.\n' +
                        '\n' +
                        'Tu es l’os de mes os, toi la chaire de ma chaire x3. ',
                      auteur: 'Frère JIMMY'
                    },
                    {
                      id: 22,
                      type: 'Composition',
                      titre: 'WEWE NDIWE MUNGU',
                      contenu: '-Wewe ndiwe mungu juu ya miungu yote eh eh, nafsi yangu mimi ina kiu kuku abudu wewe peke yako oh ni kuabudu milele, mimi ni nani, hata uni kumbuke eh kaacha utukufu, na heshima juu mbinguni, ili uniokoe eh, niitwe mwana wake mungu\n' +
                        '\n' +
                        '-Wewe hauna mwanzo wala mwisho wa maisha yako, mimi niko ndilo jina lako alpha na omega, wewe ndiwe ambaye malaika wa sifu viumbe vyote vyakuina miya milele\n' +
                        '\n' +
                        '-Twa shuka mbele ya kiti chako twa kuabudu, fazili zako niza milele twa kuabudu\n' +
                        '-Twa kuabudu bwana twakuabudu, twa kuinua bwana, twakuinua, pokea maabudu yetu, pokea baba, pokea sifa zetu, pokea baba, milele na milele eh eh.. ',
                      auteur: 'Frère DUDOS'
                    },
                    {
                      id: 43,
                      type: 'Composition',
                      titre: 'WOKOVU WANGU',
                      contenu: 'Wokovu wangu mimi, nili upata kwa bure, sikulipa kitu chochote eh, lakini yesu wangu kwa upendo mwingi, kajitoa zabihu ilio hai\n' +
                        '\n' +
                        'R// Naupenda musalaba huo, nguvu zake zanipa kushinda ah ah, naukumbatia musalaba huo ulio wokovu uh x2  wokuvu kamilifu unao toka kwadamu ya yesu.\n' +
                        '\n' +
                        'Nina matumaini yaku muona mokozi, na kuishi naye milele, katika utukufu, na furaha tele, kwakweli tusipo zeimia roho.',
                      auteur: null
                    },
                    {
                      id: 44,
                      type: 'Composition',
                      titre: 'YESU JINA HILO',
                      contenu: 'Yesu jina hilo nikubwa sana lenye kupita majina yote duniani, yesu yesu jina hilo mimi nita lisifu.\n' +
                        ' Jina hilo nikubwa sana kupita hata malaika wa mbinguni, yesu yesu jina hilo mimi nita lisifu\n' +
                        '\n' +
                        'Jina hilo yesu, lina nijaza moyo ninapo patikana na shida mimi, yesu ana zitatua, hitaji zangu zote, yeye ana zijibu uh katika giza kuu la dunia hii, yeye ana niongoza\n' +
                        '\n' +
                        'R//Nakila goti likundjwe mbele zake nazo ndimi zikiri kwamba yesu ndiye bwana mokozi wawatu wote X2.\n' +
                        'Waimbaji  waimbe\n' +
                        'Watu wote wakiri ( kwamba yesu ndiye bwana mwokozi wa watu wote.',
                      auteur: null
                    }
                  ],                  
            },
            info:{
                song:{}
            },
        }        
    }
    render(){
            return(                                
                <View  style={{backgroundColor:"#07080d",height:'100%'}}>
                    <View style={style.v1}>
                        <ScrollView>
                            {
                                this.state.songs.lumiere.map((val)=>(                                  
                                      <TouchableOpacity
                                          key={val.id}
                                          onPress={()=>{
                                            this.state.info['song']=val;
                                            this.props.navigation.navigate('Song',this.state.info)
                                          }}
                                      >
                                          <View style={style.v2}>
                                              <Text style={style.t1}>{val.titre}</Text>
                                              <Text style={style.t2}>{val.auteur}</Text>
                                          </View>                                  
                                      </TouchableOpacity>                                    
                                ))
                            }
                        </ScrollView>
                      </View>
                </View>                                          
            )
        }
}

const style = StyleSheet.create({
    v1:{
        backgroundColor:"#07080d",
        width:'100%',
        height:'100%',
    },
    v2:{
        backgroundColor:"#464965",
        flexDirection:'column',
        justifyContent:'space-between',
        width:'100%',
        height:50,
        marginTop:2,
    },
    t1:{
        fontWeight:'bold',
        fontSize:15,
        letterSpacing:1,
        color:'#FFF',
        marginLeft:10
    },
    t2:{
        fontStyle:'italic',
        fontSize:10,
        letterSpacing:1,
        color:'#FFF',
        marginLeft:10
    }
})
