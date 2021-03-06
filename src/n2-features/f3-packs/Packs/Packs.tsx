import React, {useEffect, useState} from 'react'
import s from './Packs.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../n1-main/m2-bll/store';
import {addPacksSuccess, setPackName, setPacksSuccess, setPage, setUserId} from '../../../n1-main/m2-bll/packs-reducer';
import {Pack} from './Pack/Pack';
import {Pagination} from '../../../common/Pagination/Pagination';
import {Profile} from '../../f2-profile/Profile/Profile';
import {SuperButton} from '../../../common/c2-SuperButton/SuperButton';
import {PacksModalForAdd} from "../../../n1-main/m1-ui/Components/Modal/PacksModal/PacksModalForAdd";
import {Redirect} from 'react-router-dom';
import {PATH} from '../../../n1-main/m1-ui/routes/Routes';


export const Packs = () => {
    const dispatch = useDispatch()
    const {cardsPacks, cardPacksTotalCount, pageCount, page, user_id, packName} = useSelector((state: AppRootStateType) => state.packs)
    const userPublicCardPacksCount = useSelector<AppRootStateType, number>(state => state.auth.user.publicCardPacksCount)
    const _id = useSelector<AppRootStateType, string>(state => state.auth.user._id)
    const {isLoggedIn} = useSelector((state: AppRootStateType) => state.auth)

    // useEffect(() => {
    //     if (!isLoggedIn) {
    //         debugger
    //         dispatch(setProfileSuccess())
    //         dispatch(setPacksSuccess())
    //     } else{
    //         debugger
    //         dispatch(setPacksSuccess())
    //     }
    // }, [dispatch, packName, user_id, page, packName, isLoggedIn])


    useEffect(() => {
        dispatch(setPacksSuccess())
    }, [dispatch, packName, user_id, page, cardPacksTotalCount, userPublicCardPacksCount])
        //  pageCount, cardPacksTotalCount, maxCardsCount,
        // minCardsCount, ])

    //add pack
    const addPack = (packName: string) => {
        dispatch(addPacksSuccess(packName))
    }
    const [isPackModal, setIsPackModal] = useState(false)
    const openPackModal = () => setIsPackModal(true)
    const closePackModal = () => setIsPackModal(false)

    //my/all packs
    const [isMyPacks, setIsMyPacks] = useState(user_id === _id)

    const getMyPacks = () => {
        dispatch(setUserId(_id))
        setIsMyPacks(true)
    }
    const getAllPacks = () => {
        dispatch(setUserId(''))
        setIsMyPacks(false)
    }
    //pagination
    const onPageChangedHandler = (curPage: number) =>{
        dispatch(setPage(curPage))
    }

    //searchBlock
    const [name, setName] = useState('')

    const changeHandler = () => {
        dispatch(setPackName(name))
        setName('')
    }
    if (!isLoggedIn) {
        return <Redirect to={PATH.LOGIN}/>
    }
    return (
        <div className={s.container}>
            <div className={s.box}>
                <div className={s.columnParams}>
                    <div className={s.profileContainer}>
                        <div className={s.profileBox}>
                            <Profile />
                        {/*    <div className={s.avatarBox}>*/}
                        {/*        <img src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg" alt="avaImg"*/}
                        {/*             className={s.profileAvatar}/>*/}
                        {/*    </div>*/}
                        {/*    <h3>*/}
                        {/*        {user?.name}*/}
                        {/*    </h3>*/}
                        </div>
                    </div>
                    <div className={s.paramsBox}>
                        <h3>Show packs cards</h3>
                        <div className={s.filterBtnBlock}>
                            <button className={!isMyPacks ? `${s.activeButton} ${s.filterBtn}` : `${s.filterBtn}`} onClick={getAllPacks}>All</button>
                            <button className={isMyPacks ? `${s.activeButton} ${s.filterBtn}` : `${s.filterBtn}`} onClick={getMyPacks}>My</button>
                        </div>
                        <span id="range-slider">
                            Number of cards
                        </span>
                        <button type={'button'}>Select</button>
                    </div>
                </div>
                <div className={s.columnContent}>
                    <div className={s.tableBlock}>
                        <h2>Packs list</h2>
                        <div className={s.searchBlock}>
                            <input className={s.packInput}
                                   placeholder={'Search'}
                                   value={name}
                                   onChange={(e) => {
                                       setName(e.currentTarget.value)
                                   }}
                            />
                            <SuperButton color={"blue"} onClick={changeHandler}>Search</SuperButton>
                        </div>
                        <div className={s.tableBox}>
                            <table className={s.table}>
                                <thead>
                                <tr className={s.listItem}>
                                    <th>name</th>
                                    <th>cards count</th>
                                    <th>update</th>
                                    <th>sort by author</th>
                                    <th>
                                        <button className={s.btn} onClick={openPackModal}>Add new pack</button>
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {cardsPacks && cardsPacks.map(pack => {
                                    return (
                                        <Pack
                                            key={pack._id}
                                            _id={pack._id}
                                            grade={pack.grade}
                                            path={pack.path}
                                            rating={pack.rating}
                                            shots={pack.shots}
                                            user_id={pack.user_id}
                                            type={pack.type}
                                            name={pack.name}
                                            user_name={pack.user_name}
                                            updated={pack.updated}
                                            created={pack.created}
                                            cardsCount={pack.cardsCount}
                                        />
                                    )
                                })}
                                </tbody>
                            </table>
                        </div>
                        <div>{isPackModal && <PacksModalForAdd addPack={addPack}
                                                               closePackModal={closePackModal}
                        />}</div>
                        <div className={s.tableSettings}>
                            <Pagination totalItemsCount={cardPacksTotalCount}
                                        pageSize={pageCount}
                                        portionSize={10}
                                        currentPage={page}
                                        onPageChanged={onPageChangedHandler}
                            />
                            {/*<span className={s.paramsName}>Select a Page size: </span>*/}
                            {/*<select id={'selectPageCount'} value={pageCount} onChange={onChangePageCountHandle}>*/}
                            {/*    {pageCounts.map((pcValue, i) => {*/}
                            {/*        return (*/}
                            {/*            <option key={`${i}`} value={pcValue}>{pcValue}</option>*/}
                            {/*        )*/}
                            {/*    })}*/}
                            {/*</select>*/}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}


