export interface IUser {
    active: number
    allow_email_marketing: boolean
    api_token: string
    avatar: string
    ban_reason: boolean
    banned: number
    birth_date: Date
    birthdate: string
    city: string
    code_register: string
    complete_onboarding_challenge: number
    count_challenges_user: number
    count_challenges_user_finished: number
    count_event_challenge_completed_with_refer_streamer: number
    count_hc_win_with_refers: number
    count_login: number
    count_memberships: number
    count_orders: number
    count_registers: number
    count_update_points_games: number
    count_visits: number
    count_visits_my_games: number
    country_id: string
    created_at: Date
    created_by: number
    date_membership_free: Date
    device_token: string
    email: string
    email_verified_at: Date
    event_id: number
    gender: string
    id: number
    id_suscription: number
    last_click_suscription: number
    last_ip: string
    last_login: Date
    lastname: string
    means_register: string
    membership_free: number
    modified_pass: any
    modified_time: any
    name: string
    onboarding_boost: any
    onboarding_challenge: any
    onboarding_game: Date
    onboarding_personalinfo: Date
    phone: string
    postal_code: number
    promotion_membership_active: number
    region_id: number
    register_streamer_id: number
    rerolls: number
    state: String
    total_points: number
    updated_at: Date
    user_edit: number
    username: string
    username_gh: string
    whatsaap: string
}