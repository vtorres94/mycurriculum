import React from 'react';
import { List, Image, Progress, Grid } from 'semantic-ui-react';

export interface ISkillListProps {
    skillList: {
        id,
        header,
        img,
        meta,
        rating
    }[];
}

const SkillList: React.SFC<ISkillListProps> = props => {
    return (
        <Grid centered columns={1}>
            <Grid.Column largeScreen={12} textAlign='center'>
                <List size='big' animated style={{ maxHeight: '500px', overflow: 'auto' }}>
                    {props.skillList.map(s =>
                        <List.Item >
                            <Image avatar src={require('../../assets/images/' + s.img)} />
                            <List.Content style={{ width: '90%' }}>
                                <Progress percent={s.rating * 20} active color='green' >
                                    {s.header}
                                </Progress>
                            </List.Content>
                        </List.Item>
                    )}
                </List>
            </Grid.Column>
        </Grid>
    );
}

export default SkillList;