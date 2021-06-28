// ? Process
import { Processors } from '../processors/Processors'

// ? Session y constantes
import { Storage } from '../utils/Storage'
import { sessionStorage } from '../constants/consts'

// ? Interfaces
import { IUser } from '../interfaces/IUser.interface'

export class UserService extends Processors {
    private constructor() {
        super()
    }

    public static get instance(): UserService {
        if (!(<any>window).user_api) {
            (<any>window).user_api = new UserService
        }
        return (<any>window).user_api
    }

    public listen(): void {
        this.setUserProfile()
    }

    private setUserProfile() {
        let user : IUser = new Storage().getItem(sessionStorage.user) || null
        
        const documents: any = {
            contentUser: $('.ContentComponentUserInformation') || null,
            user: $('.profile-username-content') || null,
            image: $('.profile-images-content') || null,
            coint: $('.profile-coint-content') || null,
            profileMenu: $('#tab-setting') || null
        }


        if(user) {
            $('#ContentComponentUserLogin').removeClass('d-none').addClass('d-block')

            if(documents.user) {
                documents.user.html(user.username_gh || '')
            }
    
            if(documents.image) {
                documents.image.attr('src', 'https://psn-rsc.prod.dl.playstation.net/psn-rsc/avatar/UP2131/CUSA01736_00-AV00000000000337_C3CA66C1242B2FD87096_m.png' || '')
            }
    
            if(documents.coint) {
                documents.coint.html(`+ ${user.total_points}` || '+ 0')
            }

            if(documents.contentUser) {
                documents.contentUser.removeClass('d-none').addClass('d-flex')
            }

            if(documents.profileMenu) {
                documents.profileMenu.html(`<img src="${ 'https://psn-rsc.prod.dl.playstation.net/psn-rsc/avatar/UP2131/CUSA01736_00-AV00000000000337_C3CA66C1242B2FD87096_m.png' || '' }" alt="..." class="rounded-circle w-100">`)
            }

        } else {
            $('#ContentComponentUserLogin').removeClass('d-block').addClass('d-none')

            if(documents.contentUser) {
                documents.contentUser.removeClass('d-flex').addClass('d-none')
            }

            if(documents.profileMenu) {
                documents.profileMenu.html(`<i class="flaticon2-user icon-md"><span class="d-none">&nbsp;</span></i>`)
            }

            console.warn('No hay usuario disponible')
        }
    }
}