import {AfterViewInit, Component, ElementRef, OnInit, ViewChild,} from '@angular/core';
import {Data, DataSet, Edge, Network, Node, Options} from 'vis';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('visNetworkContainer', {static: false})
  visNetworkContainer: ElementRef;

  private network: Network;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const nodes: DataSet<Node> = new DataSet([
      {id: 1, label: 'Node 1'},
      {id: 2, label: 'Node 2'},
      {id: 3, label: 'Node 3'},
      {id: 4, label: 'Node 4'},
      {id: 5, label: 'Node 5'},
    ]);

    const edges: DataSet<Edge> = new DataSet([
      {from: 1, to: 3},
      {from: 1, to: 2},
      {from: 2, to: 4},
      {from: 2, to: 5},
      {from: 3, to: 3},
    ]);

    const data: Data = {
      nodes: nodes,
      edges: edges,
    };

    const options: Options = {};

    // this.visNetworkViewContainer = document.getElementById(
    //   visNetworkViewId
    // ) as HTMLElement;

    const container: HTMLElement = this.visNetworkContainer.nativeElement;
    this.network = new Network(container, data, options);
  }
}
