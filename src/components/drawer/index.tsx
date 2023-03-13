import { motion } from "framer-motion"
import Image from "next/image"
import React from "react"


export default function Drawer() {
    const container = React.useRef<HTMLDivElement>(null)
    const [containerHeight, setContainerHeight] = React.useState<number>()

    React.useEffect(
        () => {
            setContainerHeight(container?.current?.scrollHeight)
        },
        [container?.current?.scrollHeight]
    )

    const content = React.useRef<HTMLDivElement>(null)
    const [contentHeight, setContentHeight] = React.useState<number>()

    React.useEffect(
        () => {
            setContentHeight(content?.current?.scrollHeight)
        },
        [content?.current?.scrollHeight]
    )

    const [boo, setBoo] = React.useState(false)


    const props: {
        style: React.CSSProperties
    } = {
        style: {
            userSelect: "text"
        }
    }


    return <div className="fixed w-full max-h-screen h-screen"
    >
        <motion.div
            dragElastic={0}
            dragMomentum={false}
            drag={'y'}
            dragConstraints={{ bottom: 0, top: contentHeight ? - contentHeight : 0 }}
            className={`fixed left-0 right-0 h-max w-full bg-white rounded-t-2xl shadow-lg`}
            style={{
                bottom: containerHeight && - containerHeight,
            }}
        >
            <div
                className="w-full grid justify-items-center content-center gap-5 pt-3 px-4"
                style={{
                    paddingBottom: "calc(env(safe-area-inset-bottom) + 1.5rem)"
                }}
            >
                <div className="w-1/4 max-w-[8rem] h-1 rounded bg-gray-300" />
                <p>Hellaw</p>
            </div>
            <div ref={container} className={`w-full p-4 bg-gray-100`}
                style={{
                    paddingBottom: contentHeight
                }}
            >
                <div ref={content} className="min-h-[500px] bg-gray-300 p-8 grid gap-4 justify-items-center content-start" >
                    <style>
                        {`
                            * {
                                user-select: text;
                            }
                        `}
                    </style>
                    <Image src={"/vercel.svg"} alt={"logo"} width={100} height={100}/>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur adipisci perferendis ipsam ducimus eveniet unde iste repellat ad amet maiores.</p>
                    <a href="https://framer-motion-playground-lucafrederice.vercel.app/" className="text-cyan-900">enkor</a>
                    <button type="button" onClick={() => setBoo(v => !v)} className="bg-cyan-500 hover:bg-cyan-600 text-white shadow-md hover:shadow-lg shadow-cyan-200 transition-all duration-200 ease-linear hover:shadow-cyan-300 rounded-md px-6 py-3">Battan heer</button>
                    {
                        boo && <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, magnam!</p>
                    }
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus mollitia dolorum tempore enim, impedit inventore magni similique expedita debitis ipsam dolore tenetur aliquam soluta asperiores nemo dolor. Ipsa, accusantium dignissimos.</p>
                    <small>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus tempora ullam autem doloribus quos quis exercitationem animi alias, inventore est. Fugit tempora voluptates ad porro est ipsum voluptatum non accusantium. Totam deleniti molestiae nemo beatae saepe? Ipsam, accusantium cumque. Accusantium voluptatum, magni error delectus odio doloremque? Omnis vero ducimus, autem quia et pariatur eaque, amet eius consequatur ut voluptates sint. Fugiat dolorum, vitae nesciunt ipsam numquam iste alias, corporis autem doloremque, et quaerat aut amet molestiae ipsum! Harum voluptas quis temporibus ad sint sit adipisci, earum ipsa in necessitatibus, officiis repellat repellendus rerum eos? Consequatur tempora debitis soluta ex nulla eius, a natus ipsa quod harum fuga! Dolor, fugit aut? Tempore suscipit facere veniam iste consequuntur! Magnam ipsum, incidunt eaque et expedita facere autem aliquid dolore minima recusandae assumenda nisi repudiandae labore velit repellat laborum harum maiores? Eligendi facilis expedita sapiente culpa dolorum vel aliquid accusantium, vitae, officiis rerum maxime. Sint blanditiis reiciendis possimus laudantium rem, impedit, est quae, tenetur inventore nihil laborum ipsam atque repudiandae facere veritatis dignissimos qui earum exercitationem? Non pariatur beatae, sunt placeat hic ex nam optio nostrum in modi iste voluptates molestiae dicta, a consequatur vel quam velit, commodi officiis architecto reiciendis magnam cum! Pariatur ab nostrum quae, ducimus quasi sed ut temporibus hic laudantium. Nihil iste, vel harum odit incidunt ducimus distinctio, culpa reiciendis, delectus voluptas voluptatum. Cumque ratione illum earum? Quas cumque, error vitae quam omnis, amet hic ipsam doloribus, odit facere accusantium. Nisi animi dolorum dolores sint. Cupiditate expedita consequatur unde ducimus voluptates ea sequi ipsa at temporibus nisi mollitia, a quae inventore sit eum omnis fugit labore quasi totam ipsam! Illo maiores delectus asperiores et provident fuga ipsam qui, laboriosam in dolores ex aliquid quam accusamus quibusdam amet quis fugit autem esse harum! Perferendis, eligendi. Corrupti, beatae! Ipsa, voluptatum iusto. Ipsa facere deserunt est. Nulla repellat quo, facilis nobis veniam animi placeat delectus! Commodi, voluptatibus animi voluptates tempore minus doloribus cum vero ipsum deleniti. Incidunt, atque explicabo. Placeat minus minima modi distinctio quae odio esse repudiandae aspernatur nostrum consectetur? Impedit, commodi eaque ab vitae quisquam asperiores doloribus, hic laudantium eius, harum error quod animi similique praesentium dolor ut aliquid cum. Fugiat deleniti repellendus impedit reiciendis eum soluta rem necessitatibus earum animi, corporis unde aut eos maxime amet laborum quod laudantium laboriosam voluptatum quae, totam quisquam nesciunt! Nihil, sapiente. Id nisi consequuntur laboriosam earum fugiat facere nihil? Odit ratione sunt numquam vitae suscipit quis labore deserunt iusto itaque. Eum fugiat enim laborum blanditiis? Enim, magnam molestias corrupti dolor repellendus excepturi ea beatae consequatur iure nostrum veritatis officia suscipit eveniet consectetur sit natus at aut iste molestiae! Error, perferendis amet ratione consequuntur tempore natus nemo ab tempora architecto eius autem fugiat nam eaque cum nesciunt quis. Odit, laborum dicta odio possimus dolorem quibusdam? Dolore et commodi excepturi magni? Nisi ducimus, officia unde quisquam quibusdam nostrum facere assumenda odio quia mollitia ab rerum consequatur eius laudantium, qui, nam aut temporibus? Dicta voluptatem ratione ipsam quod. Aliquam esse hic repellat et corporis! Ad, nisi excepturi.
                    </small>
                    <small>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ex quasi nesciunt sit, quisquam non laboriosam fugit adipisci odio vero quo eum excepturi, inventore porro sequi iste sapiente perferendis vitae, suscipit impedit consequuntur corporis velit sint. Expedita molestiae corporis fugiat blanditiis iure unde optio nemo iste odio sit, commodi corrupti nesciunt rerum atque fuga culpa! Distinctio impedit, blanditiis, totam optio architecto magnam sint sunt ad ab incidunt eligendi doloribus non dolore temporibus eveniet. Quos maxime magni consequuntur veniam? Provident qui vero optio libero iste debitis ex error fugit voluptatibus, iure atque repellendus inventore commodi! Nam similique optio temporibus. Reprehenderit ipsum sed voluptatum adipisci iusto tenetur consequatur laboriosam voluptatibus est cupiditate, asperiores maxime hic numquam perferendis, iste libero delectus! Ea quo repellendus magnam assumenda cupiditate aut deserunt autem. Sequi incidunt non, earum, expedita, inventore doloribus deleniti saepe placeat sunt repellat eligendi? Alias error ratione itaque ipsa fugit quasi et, eligendi omnis molestias ullam non modi beatae id tempore aut voluptatem rem? Quasi architecto totam corrupti aliquam delectus deleniti, quibusdam quam eius, ab voluptatibus odit perspiciatis assumenda labore qui possimus! Suscipit tempora, necessitatibus minima aliquam quisquam possimus ipsum temporibus quidem soluta beatae sequi mollitia laudantium molestiae facilis quis deserunt alias at ipsa dolor unde neque quibusdam dicta. Officiis quia dolorum delectus ducimus minima enim, ullam tempora, quae recusandae consequatur eius a dolores labore dignissimos. Officiis ullam laborum sint placeat, tenetur, eligendi vel enim reiciendis at temporibus perspiciatis facilis consectetur debitis veritatis voluptatem magnam nemo atque facere soluta, minus autem. Voluptatibus magnam corrupti inventore officia porro dolores repudiandae rerum quod, voluptatum qui ab consectetur numquam repellat, eveniet dicta vitae atque deleniti at aperiam nulla. Omnis, quibusdam provident alias hic ipsa praesentium cumque blanditiis assumenda mollitia in, exercitationem autem voluptates voluptatibus. Temporibus repellat sunt mollitia dolores fugit libero quibusdam recusandae, rem a hic eaque nam neque eligendi numquam veritatis, at tempore culpa! Praesentium ad molestias quaerat eaque corporis eum culpa dolor, hic tenetur similique recusandae quis nobis impedit nulla explicabo aliquam incidunt voluptate possimus delectus! Error veritatis adipisci nobis et dolores rem, ex provident ratione eveniet ducimus inventore assumenda at velit. Adipisci temporibus voluptas inventore quibusdam magnam quidem, enim fugiat non corrupti sequi? Sapiente provident fuga mollitia tenetur quidem. Voluptatem, blanditiis. Quas pariatur ducimus, ad unde aut amet eos? Aspernatur, dolorum neque rem vel accusamus nemo corporis placeat omnis atque blanditiis tempore dignissimos provident repudiandae ipsa at ex odio nesciunt labore, minima quo. Distinctio deserunt, ratione expedita dicta nemo dolorum. Commodi exercitationem, quos deleniti alias architecto vel amet, ut, tempora cum sed pariatur modi repudiandae aliquam sunt cupiditate voluptates rem hic deserunt voluptatibus ullam! Quis aut, dicta rem provident dignissimos nam illo animi voluptate omnis sapiente mollitia ex sit quae consequuntur dolores facilis suscipit! Earum quae, expedita voluptates ad impedit, animi architecto cupiditate sapiente necessitatibus itaque esse aut ab ipsum odit, distinctio ullam recusandae aspernatur blanditiis perferendis corporis odio voluptate? Accusantium ab, facere porro adipisci architecto reiciendis sed nemo ullam, molestias reprehenderit quos at nihil numquam itaque tempore maiores cumque. Repellendus qui architecto minus?
                    </small>
                    <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore inventore ab asperiores quas quod quae, suscipit cupiditate quisquam dolore nihil a eum modi placeat in voluptas vitae eligendi quidem quasi error temporibus fugit sapiente itaque. Temporibus odit voluptatem ipsum enim necessitatibus distinctio, magnam commodi delectus harum ut minus quasi laudantium, veritatis qui laboriosam. Saepe alias quisquam amet odio? Voluptas ipsa eos laborum eaque, maiores veniam nihil recusandae totam tempora perferendis ea id ipsam excepturi consectetur illum exercitationem doloremque reiciendis libero iure earum officiis. Excepturi culpa ratione ab voluptatem tempora eaque, at quibusdam suscipit necessitatibus, maiores voluptates ullam maxime quam provident cum nihil? Dignissimos reiciendis sed consequatur saepe, autem nobis obcaecati ab deserunt dolorum. Tenetur, odit! Sed consequuntur dolores fuga amet eum eius dicta, enim quis cum maiores repellat quidem, earum corporis laboriosam nesciunt inventore neque. Sunt vitae nesciunt sapiente. Veniam numquam facere eveniet, vitae et quia possimus ullam quisquam dolorem rerum dicta, hic quod doloribus? Quas obcaecati tempora explicabo harum odio nesciunt provident iure fugiat quia repudiandae illo perspiciatis repellendus sint repellat vero deserunt magni molestiae consequatur exercitationem laboriosam inventore voluptatum corrupti, nam minima! Doloribus libero expedita aut pariatur voluptatibus aliquam, explicabo excepturi voluptate suscipit nulla reiciendis, quos tempora cupiditate! Voluptatem, dolor? Quis alias explicabo adipisci dolor possimus fugiat dolores officiis eligendi earum aperiam, accusamus mollitia temporibus maxime, quod minus numquam necessitatibus ab atque? Hic accusantium repellendus porro laboriosam vel atque. Debitis voluptas, laudantium minus eligendi soluta facilis totam veniam blanditiis officia iure quidem aspernatur nam asperiores quia omnis deserunt quis, illum rem fugiat quibusdam hic? Repudiandae voluptas dolore sint? Vitae accusantium totam commodi maiores placeat ipsa, reprehenderit aliquid saepe eos deserunt hic odio natus tempore minus et quo quam corporis qui. Perspiciatis, velit eaque nobis illo, quasi nesciunt provident placeat, dignissimos totam dolore eum similique neque quaerat? Assumenda voluptate alias officia dolor iure totam debitis sed! At sint obcaecati cupiditate molestias tenetur iure nihil, blanditiis eum cum. Omnis explicabo nemo ad assumenda et itaque nesciunt perferendis, nobis possimus nihil voluptas illo eius quod illum consequuntur laudantium recusandae enim fuga quibusdam culpa consectetur ab sint, facilis rerum! Quibusdam suscipit quisquam temporibus, eius nihil, ducimus debitis minus libero quaerat, eligendi omnis vel nostrum dolores officia nemo neque soluta. Laborum nobis reiciendis iure dolor harum, architecto dolore natus deleniti minus! Ipsam, architecto commodi eligendi autem in sunt, sit debitis quae quidem rem inventore nisi tempora dolor, quas dolores odio omnis dolorum aspernatur corrupti unde eveniet. Ex reprehenderit eligendi illum ab, odio debitis tenetur dolorem unde beatae, optio earum officiis eaque tempora et recusandae voluptate sed impedit. Voluptates deleniti natus, nihil distinctio qui corporis quisquam tenetur veritatis corrupti temporibus quia asperiores doloribus, eos sed porro impedit aliquam voluptas officiis excepturi pariatur. Amet neque, quam quod aliquid ducimus excepturi! Inventore eaque molestiae exercitationem error, provident repellendus ex enim sed ipsum, qui nisi alias facilis, aliquid quis obcaecati molestias rerum doloremque praesentium fugiat. Labore cum, debitis nemo, mollitia nesciunt sequi blanditiis quidem sunt reiciendis culpa aperiam eligendi. Animi nam quisquam dolor vero enim! Omnis, labore?</small>
                </div>
            </div>
        </motion.div>
    </div>
}