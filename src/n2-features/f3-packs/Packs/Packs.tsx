import React, {useEffect} from 'react'
import s from './Packs.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../n1-main/m2-bll/store';
import {CardsPackType, UserType} from '../../../n1-main/m3-dal/api';
import {addPacksSuccess, setPacksSuccess} from '../../../n1-main/m2-bll/packs-reducer';
import {Pack} from './Pack/Pack';



export const Packs = () => {
    const dispatch = useDispatch()
    const user = useSelector<AppRootStateType, UserType>(state => state.profile.userProfile)
    const packs = useSelector<AppRootStateType, CardsPackType[]>(state => state.packs.cardsPacks)

    useEffect(() => {
        dispatch(setPacksSuccess())
    }, [dispatch])

    const addPack = () => {
        dispatch(addPacksSuccess())
    }

    return (
        <div className={s.container}>
            <div className={s.box}>
                <div className={s.columnParams}>
                    <div className={s.profileContainer}>
                        <div className={s.profileBox}>
                            <div className={s.avatarBox}>
                                <img src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg" alt="avaImg" className={s.profileAvatar}/>
                            </div>
                            <h3>
                                {user?.name}
                            </h3>
                        </div>
                    </div>
                    <div className={s.paramsBox}>
                        <h3>Show packs cards</h3>
                        <div className={s.onlyMyFilter}>
                            <button>All</button>
                            <button>My</button>
                        </div>
                        <span id="range-slider">
                            Number of cards
                        </span>
                        <button type={'button'}>Select</button>
                    </div>
                </div>
                <div className={s.columnContent}>
                    <div>
                        <h2>Packs list</h2>
                        <div className={s.tableBox}>
                            <table className={s.table}>
                                <thead>
                                <tr className={s.listItem}>
                                    <th>name</th>
                                    <th>cards count</th>
                                    <th>update</th>
                                    <th>sort by author</th>
                                    <th><button className={s.btn} onClick={addPack}>add</button></th>
                                </tr>
                                </thead>
                                <tbody>
                                {packs && packs.map(pack => {
                                    return (
                                        <Pack
                                            // loading={loading}
                                            key={pack._id}
                                            __v={pack.__v}
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
                                            cardsCount={pack.cardsCount}/>
                                    )
                                })}
                                </tbody>
                            </table>
                        </div>
                        <div className={s.tableSettings}>
                            {/*<Pagination totalItemsCount={cardPacksTotalCount}*/}
                            {/*            pageSize={pageCount}*/}
                            {/*            portionSize={10}*/}
                            {/*            currentPage={page}*/}
                            {/*            onPageChanged={onPageChangedHandle}*/}
                            {/*/>*/}
                            <span className={s.paramsName}>Select a Page size: </span>
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


