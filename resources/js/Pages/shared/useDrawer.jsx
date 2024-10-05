'use client';

import { atom, useAtomValue, useSetAtom } from 'jotai';


const drawerAtom = atom({
    isOpen: false,
    view: null,
    placement: 'right',
    containerClassName: '',
});

export function useDrawer() {
    const state = useAtomValue(drawerAtom);
    const setState = useSetAtom(drawerAtom);

    const openDrawer = ({
                            view,
                            placement,
                            containerClassName,
                        }) => {
        setState({
            ...state,
            isOpen: true,
            view,
            placement,
            containerClassName,
        });
    };

    const closeDrawer = () => {
        setState({
            ...state,
            isOpen: false,
        });
    };

    return {
        ...state,
        openDrawer,
        closeDrawer,
    };
}
