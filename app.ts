// #ДЗ
// 1) створити інтерфейс на основі цього объекта:
//     Зверніть увагу там де масиви... в них може бути багато однотипних обїектів
//

    interface ICore {
    {
        flight: number
        core: {
            reuse_count: number
            status: unknown
        }
    }
    }

    interface ILaunch{
        mission_name: string
        launch_date_local: Date
        launch_site: {
            site_name_long: string
        }
        links: {
            article_link: string
            video_link: string
        },
        rocket: {
        rocket_name: Falcon 9,
            first_stage: {
            cores: [

            ]
        },
        second_stage: {
            payloads: [
                {
                    payload_type: Satellite,
                    payload_mass_kg: 15400,
                    payload_mass_lbs: 33951.2
                }
            ]
        }
    }
    }
//
// ---------------------------------------------------------------------------—————————
// 2) протипізувати функції:
//
//     const user = {
//         name:Max,
//         age:18,
//         gender:'male'
//     }
//
// function sum(a,b){
//     return a+b
// }
// function showSum(a,b){
//     console.log(a + b);
// }
//
// function incAge(someUser, inc){
//     someUser.age+=inc
//     return someUser
// }
//
// console.log(sum(1, 2));
// showSum(2,3)
// incAge(user, 2)
