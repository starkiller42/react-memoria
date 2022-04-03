import * as C from './styles';

type Props = {
    label: string;
    icon?: any;
    onClick: React.MouseEventHandler<HTMLDivElement>
}

export const Button = ({ label, icon, onClick }: Props) => {
    return (
        <C.container onClick={onClick}>
            {icon &&
                <C.IconArea>
                    <C.Icon src={icon} />
                </C.IconArea>
            }
            <C.Label>{label}</C.Label>
        </C.container>
    );
}