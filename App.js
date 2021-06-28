import React, {Component} from 'react';
import {Row,Col,Grid,Container,Text,Content, Header, Left, Body, Right, Icon, Button, Title} from 'native-base';

class App extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='search' />
                        </Button>
                        <Button transparent>
                            <Icon name='heart' />
                        </Button>
                        <Button transparent>
                            <Icon name='more' />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <Grid>
                        <Row style={{height:300,backgroundColor:"#ff2233"}}></Row>
                        <Row style={{height:300,backgroundColor:"#002244"}}></Row>
                        <Row style={{height:300,backgroundColor:"#ff2233"}}></Row>
                        <Row style={{height:300,backgroundColor:"#002244"}}></Row>

                    </Grid>
                </Content>
            </Container>
        );
    }
}

export default App;
